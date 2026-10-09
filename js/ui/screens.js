// Router + the screens around the desk. Owned by the manager.

import { el, clear } from './dom.js';
import { VERDICTS, VERDICT_GLOSS, rankFor } from '../engine/vocab.js';
import * as S from '../engine/store.js';
import { renderDesk, resetDesk } from './desk.js';
import { renderVerdict } from './verdict.js';
import { ink } from '../fx/ink.js';

const TITLES = {
  title: 'The Archive of Unfinished Lives',
  brief: 'Intake — The Archive of Unfinished Lives',
  desk: 'The Desk — The Archive of Unfinished Lives',
  verdict: 'Verdict — The Archive of Unfinished Lives',
  epilogue: 'Sealed — The Archive of Unfinished Lives',
  summary: 'Shelved Files — The Archive of Unfinished Lives',
  manual: 'Archive Manual — The Archive of Unfinished Lives'
};

export function renderScreen(ctx, name, payload) {
  const app = document.getElementById('app');
  clear(app);
  const node = screens[name](ctx, payload || {});
  app.appendChild(node);
  document.title = TITLES[name] || 'The Archive of Unfinished Lives';
  window.scrollTo(0, 0);
  return node;
}

function caseById(ctx, id) {
  return ctx.cases.find(function (c) { return c.id === id; }) || ctx.cases[0];
}

const screens = {};

/* ---------------- title ---------------- */

let confirmRestart = false;

screens.title = function (ctx) {
  const run = ctx.run;
  const has = !!run && run.caseIndex > 0;
  const root = el('section.screen.screen-title');
  root.appendChild(el('p.department', { text: 'Department of Unfinished Lives · Intake Desk' }));
  root.appendChild(el('h1.big-title', { text: 'The Archive of\nUnfinished Lives', html: null }));
  root.appendChild(el('p.lede', {
    text: 'Every soul arrives here with what the living could not finish. You file the pages, you mark the lies, you seal a verdict. The Archive is patient. It is not, however, neutral.'
  }));
  const row = el('div.btn-row.center');
  row.appendChild(el('button.btn' + (has && !confirmRestart ? '' : '.primary') + '.big', {
    onclick: function () {
      if (has && !confirmRestart) { confirmRestart = true; ctx.render('title'); return; }
      confirmRestart = false;
      ctx.run = ctx.startRun();
      ctx.go('brief');
    }
  }, has ? (confirmRestart ? 'Yes — erase the shelf and begin again' : 'Start a new shelf') : 'Enter the Archive'));
  if (has) {
    row.appendChild(el('button.btn.primary.big', {
      onclick: function () { confirmRestart = false; ctx.go('brief'); }
    }, 'Resume · file ' + (run.caseIndex + 1) + ' of ' + run.cases.length));
    row.appendChild(el('button.btn.ghost', { onclick: function () { ctx.go('summary'); } }, 'Shelved files'));
  }
  row.appendChild(el('button.btn.ghost', { onclick: function () { ctx.go('manual', { back: 'title' }); } }, 'Archive manual'));
  root.appendChild(row);
  root.appendChild(el('p.foot-mark', { text: 'Archivist #45 · the previous file was closed without a signature' }));
  return root;
};

/* ---------------- briefing ---------------- */

screens.brief = function (ctx) {
  const c = ctx.caseById(ctx, S.currentCaseId(ctx.run));
  const run = ctx.run;
  if (!c) return el('section.screen', {}, el('p', { text: 'No case files were recovered. Run the linter.' }));
  resetDesk();
  const d = c.dossier || {};
  const root = el('section.screen.screen-brief');
  root.appendChild(el('header.brief-head', {}, [
    el('p.file-no', { text: c.subtitle || '' }),
    el('h1.case-title', { text: c.title }),
    el('p.case-era', { text: c.era + ' · difficulty ' + c.difficulty + '/5' })
  ]));

  const form = el('dl.dossier');
  [['Name', d.name], ['Also recorded as', d.alias], ['Age at entry', d.age], ['Occupation', d.occupation],
   ['Place', d.place], ['Cause of entry', d.cause], ['Entered', d.entry], ['Registrar', d.registrar]]
    .forEach(function (row) {
      if (!row[1]) return;
      form.appendChild(el('dt', { text: row[0] }));
      form.appendChild(el('dd', { text: String(row[1]) }));
    });

  root.appendChild(el('div.brief-grid', {}, [
    el('div.card.form-card', {}, [el('h2.small', {}, 'Intake form'), form]),
    el('div.brief-text', {}, [
      el('h2.small', {}, 'Intake officer\u2019s paragraph'),
      el('p.intake', { text: c.intake || '' }),
      el('p.promise', { text: 'Five measures of ink. ' + c.contradictions.length + ' falsehoods suspected. ' + c.fragments.length + ' pages recovered.' })
    ])
  ]));

  root.appendChild(el('div.btn-row.center', {}, [
    el('button.btn.primary.big', { onclick: function () { ctx.go('desk'); } }, 'Take the file'),
    el('button.btn.ghost', { onclick: function () { ctx.go('title'); } }, 'Put it down')
  ]));
  return root;
};

/* ---------------- desk ---------------- */

screens.desk = function (ctx) {
  const c = ctx.caseById(ctx, S.currentCaseId(ctx.run));
  resetDeskIfChanged(ctx, c);
  ctx.caseDef = c;
  return renderDesk(ctx);
};

function resetDeskIfChanged(ctx, c) {
  if (ctx.__deskCase !== c.id) { resetDesk(); ctx.__deskCase = c.id; }
}

/* ---------------- verdict ---------------- */

screens.verdict = function (ctx) { return renderVerdict(ctx); };

/* ---------------- epilogue ---------------- */

screens.epilogue = function (ctx, payload) {
  const r = payload.result;
  const c = ctx.caseById(ctx, r.caseId);
  const root = el('section.screen.screen-epilogue');
  root.appendChild(el('header.epi-head', {}, [
    el('p.file-no', { text: c.subtitle || '' }),
    el('h1.case-title', { text: 'Verdict sealed: ' + (r.verdict || 'none') }),
    el('div.rank-badge', { dataset: { rank: r.rank } }, [
      el('span.rank-letter', { text: r.rank }),
      el('span.rank-score', { text: r.clarity + '/100 clarity' })
    ])
  ]));
  root.appendChild(el('p.rank-note', { text: r.rankNote }));

  const t = el('div.card.reveal');
  t.appendChild(el('h2.small', {}, 'What actually happened'));
  const truth = el('p.truth', { text: c.key.truth });
  t.appendChild(truth);
  root.appendChild(t);
  ink.reveal(truth);

  // comparison
  const cmp = el('div.compare');
  cmp.appendChild(compareRow('Dominant virtue', r.virtue, c.key.virtue, r.detail.virtue));
  cmp.appendChild(compareRow('Dominant wound', r.wound, c.key.wound, r.detail.wound));
  cmp.appendChild(compareRow('Verdict', r.verdict, c.key.verdict, r.detail.verdict));
  root.appendChild(cmp);

  const bd = el('div.breakdown');
  bd.appendChild(el('p.bd-line', { text: 'Pages filed correctly: ' + r.counts.slotHits + ' of ' + r.counts.fragments }));
  bd.appendChild(el('p.bd-line', { text: 'Falsehoods caught: ' + r.counts.hits + ' of ' + (r.counts.hits + r.counts.misses) + (r.counts.falsePositives ? ' · ' + r.counts.falsePositives + ' page(s) marked false in error' : '') }));
  bd.appendChild(el('p.bd-line', { text: 'Ink unspent: ' + r.inkLeft }));
  if (r.comment) bd.appendChild(el('p.bd-note', { text: 'Your note: \u201c' + r.comment + '\u201d' }));
  root.appendChild(bd);

  root.appendChild(el('div.card.epi-text', {}, [
    el('h2.small', {}, 'The desk writes back'),
    el('p', { text: (c.epilogue && (c.epilogue[r.verdict] || c.epilogue.Retain)) || '' })
  ]));

  if (c.foreshadow) root.appendChild(el('p.foreshadow', { text: c.foreshadow }));

  const last = ctx.run.caseIndex >= ctx.run.cases.length - 1;
  root.appendChild(el('div.btn-row.center', {}, [
    el('button.btn.primary.big', {
      onclick: function () {
        if (last) { ctx.go('summary'); return; }
        S.nextCase(ctx.run);
        ctx.save();
        ctx.go('brief');
      }
    }, last ? 'Close the Archive' : 'Next file'),
    el('button.btn.ghost', {
      onclick: function () { ctx.go('summary'); }
    }, 'Shelved files')
  ]));
  return root;
};

function compareRow(label, said, truth, verdict) {
  return el('div.compare-row', { class: 'is-' + verdict }, [
    el('span.cmp-label', { text: label }),
    el('span.cmp-said', { text: 'you: ' + (said || '\u2014') }),
    el('span.cmp-truth', { text: 'file: ' + truth }),
    el('span.cmp-mark', { text: verdict === 'exact' ? '\u2713' : (verdict === 'kin' ? '\u2248' : '\u2715') })
  ]);
}

/* ---------------- summary ---------------- */

screens.summary = function (ctx) {
  const run = ctx.run;
  const root = el('section.screen.screen-summary');
  root.appendChild(el('h1.case-title', { text: 'Files shelved' }));
  if (!run || !run.results.length) {
    root.appendChild(el('p.empty', { text: 'Nothing shelved yet.' }));
    root.appendChild(el('div.btn-row.center', {}, el('button.btn', { onclick: function () { ctx.go('title'); } }, 'Back')));
    return root;
  }
  const table = el('div.shelf');
  run.results.forEach(function (r) {
    table.appendChild(el('div.shelf-row', {}, [
      el('span.shelf-rank', { text: r.rank }),
      el('span.shelf-title', { text: (ctx.caseById(ctx, r.caseId) || {}).title || r.caseId }),
      el('span.shelf-verdict', { text: r.verdict }),
      el('span.shelf-score', { text: r.clarity + '' })
    ]));
  });
  root.appendChild(table);
  const total = S.rankTotal(run);
  root.appendChild(el('div.total', {}, [
    el('span.total-label', { text: 'Mean clarity across ' + run.results.length + ' file(s)' }),
    el('span.total-value', { text: total + '/100 · rank ' + rankFor(total).rank })
  ]));
  root.appendChild(el('div.btn-row.center', {}, [
    el('button.btn', { onclick: function () { ctx.go('title'); } }, 'Return to the desk')
  ]));
  return root;
};

/* ---------------- manual ---------------- */

screens.manual = function (ctx, payload) {
  const root = el('section.screen.screen-manual');
  root.appendChild(el('h1.case-title', { text: 'Archive manual · conditions of work' }));
  const body = el('div.manual');
  body.appendChild(el('h2.small', {}, 'The work'));
  body.appendChild(el('p', { text: 'Each file is a life that arrived in pieces. Read every page in the pile, then file each one into the year you believe it belongs to. A page asks to be read; it does not announce its year.' }));
  body.appendChild(el('h2.small', {}, 'Falsehoods'));
  body.appendChild(el('p', { text: 'Some pages cannot both be true. File both, then select one and press Mark as false, then select the other. The registrar suspects a fixed number per file; finding it is not required, but the verdict is easier when you do.' }));
  body.appendChild(el('h2.small', {}, 'Ink'));
  body.appendChild(el('p', { text: 'You have five measures of ink per file, and none carries over. Asking the soul a question costs ink — a question can only be asked once its page has been filed. Spending all five is not a strategy; it is a confession.' }));
  body.appendChild(el('h2.small', {}, 'The verdict'));
  body.appendChild(el('p', { text: 'Name the dominant virtue, the dominant wound, and one of three verdicts: ' + VERDICTS.map(function (v) { return v + ' (' + VERDICT_GLOSS[v] + ')'; }).join('  ') }));
  body.appendChild(el('h2.small', {}, 'Keys'));
  body.appendChild(el('p', { text: '1–9 select pages from the pile. Esc clears your hand. Every action is saved as you go.' }));
  root.appendChild(body);
  root.appendChild(el('div.btn-row.center', {}, el('button.btn.primary', {
    onclick: function () { ctx.go(payload.back || 'title'); }
  }, 'Back to work')));
  return root;
};
