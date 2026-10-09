// The shelf: the whole register of case files — every file the Archive holds,
// not only the ones already signed. The summary screen in screens.js lists the
// files in the order verdicts were sealed; this screen lists them in play order,
// which is the order an archivist walks the shelves. It is also the one screen
// from which an unread file can be taken up and carried to the desk.
//
// No stylesheet of its own: base.css already defines the .shelf grid and the
// furniture around it. The router mounts whatever node this returns.

import { el } from './dom.js';
import { rankTotal } from '../engine/store.js';
import { rankFor } from '../engine/vocab.js';

export function renderShelf(ctx) {
  const cases = (ctx && ctx.cases) || [];
  const run = ctx && ctx.run;

  const root = el('section.screen');
  root.appendChild(el('h1.case-title', { text: 'The shelf' }));
  root.appendChild(el('p.small', {
    text: 'Every file the Archive holds · ' + cases.length + ' recovered'
  }));

  if (!cases.length) {
    root.appendChild(el('p.empty', { text: 'No case files were recovered. Run the linter.' }));
    root.appendChild(navRow(ctx));
    return root;
  }

  const shelf = el('div.shelf');
  cases.forEach(function (c) { shelf.appendChild(fileRow(ctx, c, run)); });
  root.appendChild(shelf);
  root.appendChild(totals(run));
  root.appendChild(navRow(ctx));
  return root;
}

// One row of the shelf. base.css gives .shelf-row a strict four-column grid —
// rank, title, verdict, score — and responsive.css hides the verdict column on
// small screens, so exactly those four cells go in the row. Everything else a
// file needs to say is stacked inside the title cell, the only column that is
// meant to breathe.
function fileRow(ctx, c, run) {
  const results = (run && run.results) || [];
  const ids = (run && run.cases) || [];

  // A file is sealed once a verdict has been recorded against it. The result
  // carries the rank, the clarity score and the signed verdict; a sealed file
  // cannot be reopened here — the Archive does not accept a second signature.
  const sealed = results.find(function (r) { return r.caseId === c.id; }) || null;

  // Where the archivist is standing. -1 means the file is in the archive but not
  // in this run's play order (an old save from before the file shipped).
  const at = ids.indexOf(c.id);
  const held = at !== -1 && run.caseIndex === at;

  const row = el('div.shelf-row');
  row.appendChild(el('span.shelf-rank', { text: sealed ? sealed.rank : '\u00b7' }));

  const title = el('div.shelf-title', {}, [
    el('div.hairy', { text: c.subtitle || c.id }),
    el('div', { text: c.title }),
    el('div.case-era', { text: c.era + ' \u00b7 difficulty ' + c.difficulty + '/5' }),
    el('div.promise', { text: pageLine(c) })
  ]);

  // The mark that says which file is in your hand. A chip, because the archive
  // already uses it to flag the one thing set apart from the rest.
  if (held) title.appendChild(el('span.chip', { text: 'in hand' }));

  // An unread file can be taken; a sealed one cannot, so it shows no action.
  // The take is exactly the three moves the brief expects and nothing more.
  if (!sealed && at !== -1) {
    title.appendChild(el('button.btn.tiny', {
      onclick: function () {
        ctx.run.caseIndex = ctx.run.cases.indexOf(c.id);
        ctx.save();
        ctx.go('brief');
      }
    }, 'Take this file'));
  }
  row.appendChild(title);

  row.appendChild(el('span.shelf-verdict', {
    text: sealed ? (sealed.verdict || '\u2014') : 'unread'
  }));
  row.appendChild(el('span.shelf-score', {
    text: sealed ? String(sealed.clarity) : '\u2014'
  }));

  return row;
}

// "7 pages · 2 suspected falsehoods" — the size of the pile before you open it.
function pageLine(c) {
  const pages = (c.fragments || []).length;
  const falsehoods = (c.contradictions || []).length;
  return pages + ' page' + (pages === 1 ? '' : 's')
    + ' \u00b7 ' + falsehoods + ' suspected falsehood' + (falsehoods === 1 ? '' : 's');
}

// The totals line: the mean clarity of everything sealed so far, and the rank it
// earns — computed the same way store.js's rankTotal does, through the same helper,
// so the shelf and the summary can never disagree about the average.
function totals(run) {
  const foot = el('div.desk-foot');
  const sealedCount = ((run && run.results) || []).length;
  if (!sealedCount) {
    foot.appendChild(el('p.foot-note', { text: 'Nothing sealed yet — the whole shelf is still ahead of you.' }));
    return foot;
  }
  const mean = rankTotal(run);
  foot.appendChild(el('p.foot-note', {
    text: 'Mean clarity across ' + sealedCount + ' sealed file' + (sealedCount === 1 ? '' : 's')
  }));
  foot.appendChild(el('p.foot-note', { text: mean + '/100 \u00b7 overall rank ' + rankFor(mean).rank }));
  return foot;
}

function navRow(ctx) {
  return el('div.btn-row.center', {}, [
    el('button.btn', { onclick: function () { ctx.go('title'); } }, 'Back'),
    el('button.btn.primary', { onclick: function () { ctx.go('desk'); } }, 'Resume the desk')
  ]);
}
