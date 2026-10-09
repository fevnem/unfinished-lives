// Run state: one save slot in localStorage, plus the transitions the UI needs.
// Nothing in here knows about the DOM.

import { INK_PER_CASE } from './vocab.js';

const SAVE_KEY = 'unfinished-lives/save/v1';

export function freshCaseState() {
  return {
    placed: {},        // fragId -> slot (string year)
    marked: [],        // array of [fragIdA, fragIdB] sorted pairs
    asked: [],         // question ids
    notes: {},         // fragId -> archivist's own note (free text, not scored)
    verdict: null,     // 'Release' | 'Return' | 'Retain'
    virtue: null,
    wound: null,
    comment: '',
    sealed: false
  };
}

export function newRun(cases) {
  return {
    v: 1,
    archivist: 'Archivist #45',
    startedAt: Date.now(),
    caseIndex: 0,
    cases: cases.map(function (c) { return c.id; }),
    ink: INK_PER_CASE,
    clarityTotal: 0,
    results: [],
    current: freshCaseState(),
    flags: { seenManual: false, seenIntro: false }
  };
}

export function save(run) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(run));
  } catch (e) {
    /* private mode, quota, whatever — the Archive keeps working in memory */
  }
}

export function load() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const run = JSON.parse(raw);
    if (!run || run.v !== 1 || !Array.isArray(run.cases)) return null;
    return run;
  } catch (e) {
    return null;
  }
}

export function clearSave() {
  try { localStorage.removeItem(SAVE_KEY); } catch (e) { /* ignore */ }
}

/* ---- transitions: every one mutates run and returns run ---- */

export function place(run, fragId, slot) {
  run.current.placed[fragId] = slot;
  run.current.marked = run.current.marked.filter(function (p) { return p[0] !== fragId && p[1] !== fragId; });
  return run;
}

export function unplace(run, fragId) {
  delete run.current.placed[fragId];
  run.current.marked = run.current.marked.filter(function (p) { return p[0] !== fragId && p[1] !== fragId; });
  return run;
}

export function isMarked(run, a, b) {
  const p = pair(a, b);
  return run.current.marked.some(function (m) { return m[0] === p[0] && m[1] === p[1]; });
}

export function pair(a, b) {
  return a < b ? [a, b] : [b, a];
}

export function toggleMark(run, a, b) {
  if (a === b) return run;
  const p = pair(a, b);
  if (isMarked(run, a, b)) {
    run.current.marked = run.current.marked.filter(function (m) { return !(m[0] === p[0] && m[1] === p[1]); });
  } else {
    run.current.marked.push(p);
  }
  return run;
}

export function canAfford(run, question) {
  return run.ink >= question.cost;
}

export function ask(run, question) {
  if (run.current.asked.indexOf(question.id) !== -1) return run;
  if (!canAfford(run, question)) return run;
  run.ink -= question.cost;
  run.current.asked.push(question.id);
  return run;
}

export function nextCase(run) {
  run.caseIndex += 1;
  run.ink = INK_PER_CASE;
  run.current = freshCaseState();
  return run;
}

export function record(run, caseId, result) {
  run.results.push(Object.assign({ caseId: caseId, at: Date.now() }, result));
  run.clarityTotal += result.clarity;
  return run;
}

export function currentCaseId(run) {
  return run.cases[run.caseIndex] || null;
}

export function rankTotal(run) {
  if (!run.results.length) return 0;
  return Math.round(run.results.reduce(function (s, r) { return s + r.clarity; }, 0) / run.results.length);
}
