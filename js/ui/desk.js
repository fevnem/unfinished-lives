// The desk: the pile, the timeline, the contradictions, the questions.
// Owned by the manager. Case files never touch this.

import { el, clear, esc } from './dom.js';
import { KINDS, INK_PER_CASE, VERDICTS } from '../engine/vocab.js';
import * as S from '../engine/store.js';
import { ink } from '../fx/ink.js';

let sel = null;         // {type:'pile'|'placed', id} — the page the player holds
let markPending = null; // fragId waiting for its contradiction partner
let dragging = null;    // fragId under the pointer mid-drag (HTML5 enhancement only)

// Drop highlight. The class is ours to name but another hand styles it:
//   .slot.is-drop-target, .frag-list.is-drop-target  ->  "a page lands here"
// It is deliberately not required for the feature to work — until it is styled,
// the slot still reacts to the pointer via its own :hover rule and the carried
// card keeps the existing .is-selected lift, so the gesture stays legible.
const DROP_CLASS = 'is-drop-target';

function clearDropTargets() {
  document.querySelectorAll('.' + DROP_CLASS).forEach(function (n) {
    n.classList.remove(DROP_CLASS);
  });
}

// Which page is being dragged? Our own state first (every drag starts in this
// page), then the transfer payload for anything handed to us from outside.
function dragId(e) {
  if (dragging) return dragging;
  try { return e.dataTransfer.getData('text/plain') || null; } catch (err) { return null; }
}

function isFragDrag(e) {
  if (dragging) return true;
  const t = e.dataTransfer && e.dataTransfer.types;
  return !!t && Array.prototype.indexOf.call(t, 'text/plain') !== -1;
}

export function resetDesk() { sel = null; markPending = null; dragging = null; }

export function renderDesk(ctx) {
  const c = ctx.caseDef;
  const run = ctx.run;
  const byId = {};
  c.fragments.forEach(function (f) { byId[f.id] = f; });

  const root = el('section.screen.screen-desk', { dataset: { case: c.id } });
  dragging = null; // a fresh render never carries a drag from the last one

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
  // the pile is a drop zone too: a filed page dragged here is set down again
  pile.addEventListener('dragover', function (e) {
    if (!isFragDrag(e)) return;
    e.preventDefault();
    try { e.dataTransfer.dropEffect = 'move'; } catch (err) { /* ignore */ }
    clearDropTargets();
    pileList.classList.add(DROP_CLASS);
  });
  pile.addEventListener('dragleave', function (e) {
    if (e.relatedTarget && pile.contains(e.relatedTarget)) return;
    pileList.classList.remove(DROP_CLASS);
  });
  pile.addEventListener('drop', function (e) {
    e.preventDefault();
    const id = dragId(e);
    dragging = null;
    clearDropTargets();
    if (!id || !run.current.placed[id]) return; // nothing was filed: no state to change
    S.unplace(run, id);
    if (sel && sel.id === id) sel = null;
    if (markPending === id) markPending = null;
    commit(ctx);
  });

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
    // drop a held page into this year — files it, or re-files a page already here
    box.addEventListener('dragover', function (e) {
      if (!isFragDrag(e)) return;
      e.preventDefault();
      try { e.dataTransfer.dropEffect = 'move'; } catch (err) { /* ignore */ }
      clearDropTargets();
      box.classList.add(DROP_CLASS);
    });
    box.addEventListener('dragleave', function (e) {
      if (e.relatedTarget && box.contains(e.relatedTarget)) return;
      box.classList.remove(DROP_CLASS);
    });
    box.addEventListener('drop', function (e) {
      e.preventDefault();
      const id = dragId(e);
      dragging = null;
      box.classList.remove(DROP_CLASS);
      if (!id || run.current.placed[id] === slot) return; // nothing new to file
      S.place(run, id, slot);
      if (sel && sel.id === id) sel = null;
      commit(ctx);
    });
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
  const status = statusBar(ctx, byId);
  if (status) root.appendChild(status);
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

// The one honest place that says what is in your hand and whose turn it is,
// sitting above the grid so a marking in progress can never be lost off-screen.
function statusBar(ctx, byId) {
  if (markPending) {
    const a = byId[markPending];
    return el('div.desk-status.is-marking', { role: 'status', 'aria-live': 'polite' }, [
      el('p.status-text', {}, [
        'Marking ',
        el('strong.status-label', { text: a ? a.label : markPending }),
        ' as false \u2014 now choose the page it contradicts.'
      ]),
      el('button.btn.tiny.ghost', {
        onclick: function () { markPending = null; commit(ctx); }
      }, 'Cancel marking')
    ]);
  }
  if (sel) {
    const f = byId[sel.id];
    if (f) {
      const held = sel.type === 'pile'
        ? 'Holding \u201c' + f.label + '\u201d from the pile \u2014 click a year to file it, or press Esc to set it down.'
        : 'Holding \u201c' + f.label + '\u201d from the record \u2014 drag it to another year, back to the pile, or mark it as false.';
      return el('div.desk-status.is-holding', { role: 'status', 'aria-live': 'polite' }, [
        el('p.status-text', { text: held })
      ]);
    }
  }
  return null;
}

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
      el('span.frag-label', { text: f.label }),
      selected && where === 'pile' ? el('span.frag-hold', { text: 'in hand' }) : null
    ]),
    el('p.frag-text', { text: f.text })
  ]);
  if (where === 'placed') node.appendChild(el('span.frag-pin', { text: '\u2014' }));

  // Drag is an enhancement laid on top of click/keyboard, never a replacement:
  // clicking a card, pressing 1-9 and Esc all behave exactly as before.
  node.setAttribute('draggable', 'true');
  node.addEventListener('dragstart', function (e) {
    dragging = f.id;
    try {
      e.dataTransfer.setData('text/plain', f.id);
      e.dataTransfer.effectAllowed = 'move';
    } catch (err) { /* ignore */ }
    node.classList.add('is-dragging');
    node.classList.add('is-selected'); // existing-class fallback while carried
  });
  node.addEventListener('dragend', function () {
    dragging = null;
    node.classList.remove('is-dragging');
    if (!(sel && sel.id === f.id)) node.classList.remove('is-selected');
    clearDropTargets();
  });
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
    // an explicit way out of the marking flow, right where it started
    if (markPending === f.id) {
      row.appendChild(el('button.btn.tiny.ghost', {
        onclick: function () { markPending = null; commit(ctx); }
      }, 'Cancel'));
    }
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
  if (markPending) {
    // mirrors the top status bar so the flow reads the same wherever you look
    box.appendChild(el('p.mark-wait', { text: 'Waiting for the contradicting page\u2026' }));
  }
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
