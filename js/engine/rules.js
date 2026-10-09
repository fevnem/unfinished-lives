// Scoring. One case in, one result object out. Pure: no DOM, no state mutation.

import { KIN, rankFor } from './vocab.js';

const W = {
  slot: 2,          // per correctly filed fragment
  contradictionHit: 8,
  contradictionFalse: -6,
  virtueExact: 10,
  virtueKin: 4,
  woundExact: 10,
  woundKin: 4,
  verdict: 15,
  inkLeft: 2
};

function kin(list, a, b) {
  return a === b ? 0 : (KIN[a] && KIN[a].indexOf(b) !== -1 ? 1 : -1);
}

export function maxScore(caseDef, inkStart) {
  return caseDef.fragments.length * W.slot
    + caseDef.contradictions.length * W.contradictionHit
    + W.virtueExact + W.woundExact + W.verdict
    + inkStart * W.inkLeft;
}

export function scoreCase(caseDef, run, inkStart) {
  const c = run.current;
  const byId = {};
  caseDef.fragments.forEach(function (f) { byId[f.id] = f; });

  let earned = 0;
  const detail = { slots: [], contradictions: [], virtue: '', wound: '', verdict: '' };

  // fragments
  let slotHits = 0;
  caseDef.fragments.forEach(function (f) {
    const ok = c.placed[f.id] === f.anchor;
    if (ok) { earned += W.slot; slotHits += 1; }
    detail.slots.push({ id: f.id, placed: c.placed[f.id] || null, anchor: f.anchor, ok: ok });
  });

  // contradictions
  const truth = {};
  caseDef.contradictions.forEach(function (k) {
    const p = k.a < k.b ? k.a + '|' + k.b : k.b + '|' + k.a;
    truth[p] = k;
  });
  let hits = 0, misses = 0, falsePositives = 0;
  c.marked.forEach(function (m) {
    const p = m[0] + '|' + m[1];
    if (truth[p]) { earned += W.contradictionHit; hits += 1; truth[p].__hit = true; }
    else { earned += W.contradictionFalse; falsePositives += 1; }
  });
  Object.keys(truth).forEach(function (p) {
    if (!truth[p].__hit) { misses += 1; detail.contradictions.push({ pair: p, ok: false, reason: truth[p].reason }); }
    else detail.contradictions.push({ pair: p, ok: true, reason: truth[p].reason });
  });
  Object.keys(truth).forEach(function (p) { delete truth[p].__hit; });

  // judgement
  const kv = kin(null, c.virtue, caseDef.key.virtue);
  const kw = kin(null, c.wound, caseDef.key.wound);
  if (kv === 0) { earned += W.virtueExact; detail.virtue = 'exact'; }
  else if (kv === 1) { earned += W.virtueKin; detail.virtue = 'kin'; }
  else detail.virtue = 'miss';
  if (kw === 0) { earned += W.woundExact; detail.wound = 'exact'; }
  else if (kw === 1) { earned += W.woundKin; detail.wound = 'kin'; }
  else detail.wound = 'miss';

  const vOk = c.verdict === caseDef.key.verdict;
  if (vOk) earned += W.verdict;
  detail.verdict = vOk ? 'exact' : 'miss';

  earned += run.ink * W.inkLeft;

  const max = maxScore(caseDef, inkStart);
  const clarity = Math.max(0, Math.min(100, Math.round((earned / max) * 100)));
  const r = rankFor(clarity);

  return {
    clarity: clarity,
    earned: earned,
    max: max,
    rank: r.rank,
    rankNote: r.note,
    verdict: c.verdict,
    virtue: c.virtue,
    wound: c.wound,
    key: caseDef.key,
    detail: detail,
    counts: { slotHits: slotHits, fragments: caseDef.fragments.length, hits: hits, misses: misses, falsePositives: falsePositives },
    comment: c.comment,
    inkLeft: run.ink
  };
}
