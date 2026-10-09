#!/usr/bin/env node
// Content linter: validates every case file against the frozen contract in README.md.
// Run it before you say a case is done:  node tools/lint-cases.mjs

import { loadCases, CASE_IDS } from '../js/engine/registry.js';
import { VIRTUES, WOUNDS, VERDICTS, KINDS, INK_PER_CASE } from '../js/engine/vocab.js';

const errors = [];
const warns = [];
const problems = (id, msg) => errors.push(id + ': ' + msg);
const notice = (id, msg) => warns.push(id + ': ' + msg);

const cases = await loadCases();
const loaded = new Set(cases.map((c) => c.id));

const unwritten = CASE_IDS.filter((id) => !loaded.has(id));

const seenTitles = new Map();

for (const c of cases) {
  const isMeta = c.id === 'case-meta';
  if (c.id !== 'case-meta' && !/^case-\d\d$/.test(c.id)) problems(c.id, 'id must look like case-NN');
  if (!c.title) problems(c.id, 'missing title');
  if (seenTitles.has(c.title)) problems(c.id, 'title duplicates ' + seenTitles.get(c.title));
  seenTitles.set(c.title, c.id);
  if (typeof c.order !== 'number') problems(c.id, 'missing numeric order');
  if (!c.era) problems(c.id, 'missing era');
  if (!(c.difficulty >= 1 && c.difficulty <= 5)) problems(c.id, 'difficulty must be 1..5');
  if (!c.intake || c.intake.length < 80) problems(c.id, 'intake must be a real paragraph (>=80 chars)');
  if (typeof c.foreshadow !== 'string' && !isMeta) problems(c.id, 'foreshadow must be a string (may be empty only for the finale)');

  // dossier
  const d = c.dossier || {};
  for (const k of ['name', 'occupation', 'cause', 'entry']) if (!d[k]) problems(c.id, 'dossier.' + k + ' missing');

  // slots
  if (!Array.isArray(c.slots) || c.slots.length < 5 || c.slots.length > 9) problems(c.id, 'slots must be 5..9 years');
  const slots = new Set(c.slots || []);
  if (slots.size !== (c.slots || []).length) problems(c.id, 'duplicate slot values');

  // fragments
  const frags = c.fragments || [];
  if (frags.length < 7 || frags.length > 11) problems(c.id, 'fragments must be 7..11 (found ' + frags.length + ')');
  const ids = new Set();
  const kinds = new Set();
  for (const f of frags) {
    if (!f.id || !f.id.startsWith(c.id + '-')) problems(c.id, 'fragment id "' + f.id + '" must start with "' + c.id + '-"');
    if (ids.has(f.id)) problems(c.id, 'duplicate fragment id ' + f.id);
    ids.add(f.id);
    if (!KINDS[f.kind]) problems(c.id, f.id + ': kind "' + f.kind + '" is not in KINDS');
    kinds.add(f.kind);
    if (!f.label) problems(c.id, f.id + ': missing label');
    if (!f.text || f.text.length < 30) problems(c.id, f.id + ': text must be at least 30 chars of real document');
    if (!slots.has(f.anchor)) problems(c.id, f.id + ': anchor "' + f.anchor + '" is not one of slots');
    if (f.unlocks && !(c.questions || []).some((q) => q.id === f.unlocks)) problems(c.id, f.id + ': unlocks "' + f.unlocks + '" names no question');
  }
  if (kinds.size < 3) problems(c.id, 'at least 3 different fragment kinds required (found ' + kinds.size + ')');

  // anchor spread: the timeline must be actually used
  const anchorCount = {};
  frags.forEach((f) => { anchorCount[f.anchor] = (anchorCount[f.anchor] || 0) + 1; });
  if (Object.keys(anchorCount).length < 3 && !isMeta) problems(c.id, 'fragments must occupy at least 3 different slots');

  // contradictions
  const ks = c.contradictions || [];
  if (ks.length < 2 || ks.length > 4) problems(c.id, 'contradictions must be 2..4 (found ' + ks.length + ')');
  const pairSeen = new Set();
  for (const k of ks) {
    if (!ids.has(k.a) || !ids.has(k.b)) problems(c.id, 'contradiction references unknown fragment (' + k.a + ', ' + k.b + ')');
    if (k.a === k.b) problems(c.id, 'contradiction pairs a fragment with itself');
    const p = [k.a, k.b].sort().join('|');
    if (pairSeen.has(p)) problems(c.id, 'duplicate contradiction pair ' + p);
    pairSeen.add(p);
    if (!k.reason || k.reason.length < 25) problems(c.id, 'contradiction needs a reason it cannot both be true (>=25 chars)');
  }

  // questions
  const qs = c.questions || [];
  if (qs.length < 3 || qs.length > 6) problems(c.id, 'questions must be 3..6 (found ' + qs.length + ')');
  let cost = 0;
  const qids = new Set();
  for (const q of qs) {
    if (qids.has(q.id)) problems(c.id, 'duplicate question id ' + q.id);
    qids.add(q.id);
    if (!ids.has(q.requires)) problems(c.id, 'question ' + q.id + ' requires unknown fragment ' + q.requires);
    if (![1, 2].includes(q.cost)) problems(c.id, 'question ' + q.id + ' cost must be 1 or 2');
    cost += q.cost;
    if (!q.prompt || !q.answer) problems(c.id, 'question ' + q.id + ' needs prompt and answer');
    if (q.answer && q.answer.length < 25) problems(c.id, 'question ' + q.id + ' answer is too short to be worth ink');
  }
  if (cost <= INK_PER_CASE) problems(c.id, 'total question cost ' + cost + ' must exceed the ink you start with (' + INK_PER_CASE + ') so asking everything is impossible');
  if (cost > 12) notice(c.id, 'total question cost ' + cost + ' is high; 6..10 reads better');

  // key
  const k = c.key || {};
  if (!VIRTUES.includes(k.virtue)) problems(c.id, 'key.virtue "' + k.virtue + '" not in VIRTUES');
  if (!WOUNDS.includes(k.wound)) problems(c.id, 'key.wound "' + k.wound + '" not in WOUNDS');
  if (!VERDICTS.includes(k.verdict)) problems(c.id, 'key.verdict "' + k.verdict + '" not in VERDICTS');
  if (!k.truth || k.truth.length < 120) problems(c.id, 'key.truth must be a real account (>=120 chars)');

  // epilogue
  for (const v of VERDICTS) {
    const t = (c.epilogue || {})[v];
    if (!t || t.length < 60) problems(c.id, 'epilogue.' + v + ' missing or too short');
  }

  if (!problems.length) { /* noop */ }
}

const bad = errors.length;
console.log('');
console.log('  ARCHIVE — case linter');
console.log('  ' + '-'.repeat(58));
for (const c of cases) {
  const sizes = c.fragments.length + ' pages · ' + c.contradictions.length + ' falsehoods · ' + c.questions.length + ' questions · ink ' + c.questions.reduce((s, q) => s + q.cost, 0);
  console.log('  ' + c.id.padEnd(11) + ' ' + c.title.slice(0, 44).padEnd(44) + ' ' + sizes);
}
console.log('  ' + '-'.repeat(58));
console.log('  ' + cases.length + ' case(s) loaded · ' + bad + ' error(s) · ' + warns.length + ' note(s)');
if (unwritten.length) console.log('  ' + unwritten.length + ' not written yet: ' + unwritten.join(' '));
if (warns.length) { console.log(''); warns.forEach((w) => console.log('  note   ' + w)); }
if (bad) { console.log(''); errors.forEach((e) => console.log('  ERROR  ' + e)); }
console.log('');
process.exit(bad ? 1 : 0);
