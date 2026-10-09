// The desk: the pile, the timeline, the contradictions, the questions.
// Owned by the manager. Case files never touch this.

import { el, clear, esc } from './dom.js';
import { KINDS, INK_PER_CASE, VERDICTS } from '../engine/vocab.js';
import * as S from '../engine/store.js';
import { ink } from '../fx/ink.js';

let sel = null;        // {type:'pile'|'placed', id}
let markPending = null; // fragId waiting for its contradiction partner

export function resetDesk() { sel = null; markPending = null; }

export function renderDesk(ctx) {
  const c = ctx.caseDef;
  const run = ctx.run;
  const byId = {};
  c.fragments.forEach(function (f) { byId[f.id] = f; });

  const root = el('section.screen.screen-desk', { dataset: { case: c.id } });

  /* ---------- head ---------- */
  const head = el('header.case-head', {}, [
    el('div.case-head-main', {}, [
      el('p.hairy', {}, 'File ' + (c.subtitle || c.id)),
      el('h1.case-title', { text: c.title }),
      el('p.case-era', { text: c.era + ' · difficulty ' + c.difficulty + '/5' })
    ]),
    el('div.case-head-side', {}, [
      inkMeter(run),
      el('div.btn-row', {}, [
        el('button.btn.ghost', { onclick: function () { ctx.go('manual', { back: 'desk' }); } }, 'Archive manual'),
        el('button.btn.ghost', { onclick: function () { ctx.go('title'); } }, 'Shelve file')
      ])
    ])
  ]);

  /* ---------- pile ---------- */
  const pile = el('section.pane.pane-pile', {}, [
    el('h2.pane-title', {}, ['The pile', el('span.pane-count', { text: String(c.fragments.filter(function (f) { return !run.current.placed[f.id]; }).length) })]),
    el('p.pane-hint', { text: 'Documents recovered from this life. Read them, then file each one.' })
  ]);
  const pileList = el('div.frag-list');
  c.fragments.forEach(function (f, i) {
    if (run.current.placed[f.id]) return;
    pileList.appendChild(fragCard(f, i, ctx, 'pile'));
  });
  if (!pileList.childNodes.length) {
    pileList.appendChild(el('p.empty', { text: 'The pile is empty. Everything is filed.' }));
  }
  pile.appendChild(pileList);

  /* ---------- timeline ---------- */
  const placedCount = Object.keys(run.current.placed).length;
  const tl = el('section.pane.pane-timeline', {}, [
    el('h2.pane-title', {}, ['The record', el('span.pane-count', { text: placedCount + '/' + c.fragments.length })]),
    el('p.pane-hint', { text: sel && sel.type === 'pile' ? 'Now choose a year for "' + byId[sel.id].label + '".' : 'Select a document, then a year. The registrar does not accept approximations.' })
  ]);
  const tlList = el('div.timeline');
  c.slots.forEach(function (slot) {
    const box = el('div.slot', {
      dataset: { slot: slot },
      onclick: function () { if (sel && sel.type === 'pile') { S.place(run, sel.id, slot); sel = null; commit(ctx); } }
    }, [
      el('div.slot-year', { text: slot }),
      el('div.slot-body')
    ]);
    const body = box.querySelector('.slot-body');
    c.fragments.forEach(function (f) {
      if (run.current.placed[f.id] === slot) body.appendChild(fragCard(f, null, ctx, 'placed'));
    });
    if (!body.childNodes.length) body.appendChild(el('p.slot-empty', { text: '—' }));
    tlList.appendChild(box);
  });
  tl.appendChild(tlList);

  /* ---------- file pane ---------- */
  const file = el('section.pane.pane-file', {}, [
    el('h2.pane-title', {}, 'Archivist\u2019s desk'),
    inspector(ctx, byId),
    questionsPane(ctx, c),
    contradictionPane(ctx, byId)
  ]);

  const foot = el('footer.desk-foot', {}, [
    el('p.foot-note', { text: 'The registrar suspects ' + c.contradictions.length + ' falsehood' + (c.contradictions.length === 1 ? '' : 's') + ' in this file · keys 1-9 take a page from the pile · Esc sets it down.' }),
    el('div.btn-row', {}, [
      placedCount > 0 ? el('button.btn.ghost', {
        onclick: function () {
          Object.keys(run.current.placed).forEach(function (id) { S.unplace(run, id); });
          sel = null; markPending = null;
          commit(ctx);
        }
      }, 'Clear the record') : null,
      el('button.btn.primary.big', {
        disabled: placedCount < Math.ceil(c.fragments.length / 2),
        onclick: function () { ctx.go('verdict'); }
      }, 'Prepare verdict')
    ])
  ]);

  root.appendChild(head);
  root.appendChild(el('div.desk-grid', {}, [pile, tl, file]));
  root.appendChild(foot);

  // keyboard: 1..9 select pile cards, Esc clears selection
  let n = 0;
  root.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { sel = null; markPending = null; commit(ctx); return; }
    const idx = parseInt(e.key, 10);
    if (idx >= 1 && idx <= 9) {
      const f = c.fragments.filter(function (x) { return !run.current.placed[x.id]; })[idx - 1];
      if (f) { sel = { type: 'pile', id: f.id }; commit(ctx); }
    }
  });
  root.setAttribute('tabindex', '-1');
  setTimeout(function () { root.focus(); }, 0);
  return root;
}

function commit(ctx) { ctx.save(); ctx.render('desk'); }

/* ---------- pieces ---------- */

function fragCard(f, index, ctx, where) {
  const run = ctx.run;
  const selected = sel && sel.id === f.id;
  const node = el('article.frag', {
    class: (selected ? 'is-selected ' : '') + (where === 'placed' ? 'is-filed ' : ''),
    dataset: { id: f.id, kind: f.kind },
    tabindex: '0',
    onclick: function (e) {
      e.stopPropagation();
      if (where === 'placed' && markPending && markPending !== f.id) {
        S.toggleMark(run, markPending, f.id);
        markPending = null;
        sel = null;
        commit(ctx);
        return;
      }
      sel = { type: where, id: f.id };
      commit(ctx);
    }
  }, [
    el('header.frag-head', {}, [
      el('span.frag-kind', { text: KINDS[f.kind] || f.kind }),
      index !== null && index !== undefined ? el('span.frag-key', { text: String(index + 1) }) : null,
      el('span.frag-label', { text: f.label })
    ]),
    el('p.frag-text', { text: f.text })
  ]);
  if (where === 'placed') node.appendChild(el('span.frag-pin', { text: '\u2014' }));
  return node;
}

function inkMeter(run) {
  const wrap = el('div.ink', { title: 'Ink remaining: attention you can still spend' });
  wrap.appendChild(el('span.ink-label', { text: 'Ink' }));
  for (let i = 0; i < INK_PER_CASE; i++) {
    wrap.appendChild(el('span.ink-drop', { class: i < run.ink ? 'is-full' : '' }));
  }
  return wrap;
}

function inspector(ctx, byId) {
  const box = el('div.inspector');
  const run = ctx.run;
  if (!sel) {
    box.appendChild(el('p.empty', { text: 'Select a document to inspect it.' }));
    return box;
  }
  const f = byId[sel.id];
  if (!f) { box.appendChild(el('p.empty', { text: 'Select a document to inspect it.' })); return box; }
  box.appendChild(el('div.insp-head', {}, [
    el('span.insp-kind', { text: KINDS[f.kind] || f.kind }),
    el('span.insp-id', { text: f.id })
  ]));
  box.appendChild(el('h3.insp-label', { text: f.label }));
  box.appendChild(el('p.insp-text', { text: f.text }));
  if (f.note) box.appendChild(el('p.insp-note', { text: 'Note in the margin: ' + f.note }));

  if (sel.type === 'pile') {
    const row = el('div.slot-picker');
    row.appendChild(el('span.slot-picker-label', { text: 'File into:' }));
    ctx.caseDef.slots.forEach(function (s) {
      row.appendChild(el('button.chip', { onclick: function () { S.place(run, f.id, s); sel = null; commit(ctx); } }, s));
    });
    box.appendChild(row);
  } else {
    const row = el('div.btn-row');
    row.appendChild(el('button.btn.ghost', {
      onclick: function () { S.unplace(run, f.id); sel = null; markPending = null; commit(ctx); }
    }, 'Lift from the record'));
    row.appendChild(el('button.btn', {
      class: markPending === f.id ? 'is-armed' : '',
      onclick: function () {
        markPending = markPending === f.id ? null : f.id;
        sel = { type: 'placed', id: f.id };
        commit(ctx);
      }
    }, markPending === f.id ? 'Now pick the contradicting page' : 'Mark as false'));
    box.appendChild(row);
    box.appendChild(el('p.insp-hint', { text: 'Mark two pages as false when the record cannot be true of itself.' }));
  }
  return box;
}

function questionsPane(ctx, c) {
  const run = ctx.run;
  const box = el('div.questions', {}, [el('h3', {}, 'Questions to the soul')]);
  const placed = run.current.placed;
  let shown = 0;
  c.questions.forEach(function (q) {
    const open = !q.requires || !!placed[q.requires];
    const asked = run.current.asked.indexOf(q.id) !== -1;
    if (!open) {
      box.appendChild(el('p.q-locked', { text: '\u25a0 A question is sealed until its page is filed.' }));
      return;
    }
    shown += 1;
    if (asked) {
      box.appendChild(el('div.qa', {}, [
        el('p.qa-prompt', { text: q.prompt }),
        el('p.qa-answer', { text: q.answer })
      ]));
      return;
    }
    const afford = S.canAfford(run, q);
    box.appendChild(el('div.q', {}, [
      el('p.q-prompt', { text: q.prompt }),
      el('button.btn.tiny', {
        disabled: !afford,
        onclick: function () { S.ask(run, q); commit(ctx); }
      }, afford ? 'Ask · ' + q.cost + ' ink' : 'No ink left')
    ]));
  });
  if (!shown) box.appendChild(el('p.empty', { text: 'File a page to earn the right to ask one.' }));
  return box;
}

function contradictionPane(ctx, byId) {
  const run = ctx.run;
  const box = el('div.marks', {}, [el('h3', {}, 'Falsehoods marked')]);
  const marked = run.current.marked;
  if (!marked.length) {
    box.appendChild(el('p.empty', { text: 'None marked. The registrar will not remind you.' }));
    return box;
  }
  marked.forEach(function (m) {
    box.appendChild(el('div.mark', {}, [
      el('p.mark-pair', { text: (byId[m[0]] ? byId[m[0]].label : m[0]) + '  \u2716  ' + (byId[m[1]] ? byId[m[1]].label : m[1]) }),
      el('button.btn.tiny.ghost', {
        onclick: function () { S.toggleMark(run, m[0], m[1]); commit(ctx); }
      }, 'unmark')
    ]));
  });
  return box;
}
