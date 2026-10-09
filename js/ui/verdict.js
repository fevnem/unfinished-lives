// The verdict form. Owned by the manager.

import { el } from './dom.js';
import { VERDICTS, VERDICT_GLOSS, VIRTUES, WOUNDS, INK_PER_CASE } from '../engine/vocab.js';
import { scoreCase, maxScore } from '../engine/rules.js';
import * as S from '../engine/store.js';

export function renderVerdict(ctx) {
  const c = ctx.caseDef || ctx.caseById(ctx, S.currentCaseId(ctx.run));
  const run = ctx.run;
  const cur = run.current;
  const root = el('section.screen.screen-verdict');

  root.appendChild(el('header.case-head', {}, [
    el('div', {}, [
      el('p.hairy', { text: c.subtitle || '' }),
      el('h1.case-title', { text: 'Seal: ' + c.title }),
      el('p.case-era', { text: c.era })
    ])
  ]));

  root.appendChild(el('div.btn-row', {}, [
    el('button.btn.ghost', { onclick: function () { ctx.go('desk'); } }, '\u2190 Back to the desk')
  ]));

  if (!cur.verdict) root.appendChild(el('p.promise', { text: 'A verdict cannot be revised once sealed. Neither can a life.' }));

  // verdict choice
  const vBox = el('div.choice-block', {}, el('h2.small', {}, 'Verdict'));
  const vRow = el('div.chips');
  VERDICTS.forEach(function (v) {
    vRow.appendChild(el('button.chip.big', {
      class: cur.verdict === v ? 'is-picked' : '',
      title: VERDICT_GLOSS[v],
      onclick: function () { cur.verdict = v; ctx.save(); ctx.render('verdict'); }
    }, v));
  });
  vBox.appendChild(vRow);
  if (cur.verdict) vBox.appendChild(el('p.gloss', { text: VERDICT_GLOSS[cur.verdict] }));
  root.appendChild(vBox);

  root.appendChild(chipBlock('Dominant virtue', VIRTUES, 'virtue', ctx));
  root.appendChild(chipBlock('Dominant wound', WOUNDS, 'wound', ctx));

  // note
  const nBox = el('div.choice-block', {}, el('h2.small', {}, 'Note for the file (optional)'));
  const ta = el('textarea.note', {
    rows: '3',
    placeholder: 'One line you would want a stranger to read.',
    oninput: function () { cur.comment = ta.value; ctx.save(); }
  });
  ta.value = cur.comment || '';
  nBox.appendChild(ta);
  root.appendChild(nBox);

  const ready = !!(cur.verdict && cur.virtue && cur.wound);
  const placed = Object.keys(cur.placed).length;
  root.appendChild(el('footer.desk-foot', {}, [
    el('p.foot-note', { text: placed + ' of ' + c.fragments.length + ' pages filed · ' + cur.marked.length + ' falsehood(s) marked · ' + run.ink + ' ink unspent' }),
    el('button.btn.primary.big', {
      disabled: !ready,
      onclick: function () {
        const result = scoreCase(c, run, INK_PER_CASE);
        S.record(run, c.id, result);
        cur.sealed = true;
        ctx.save();
        ctx.render('epilogue', { result: result });
      }
    }, ready ? 'Seal the file' : 'Name the virtue, the wound and the verdict')
  ]));

  return root;
}

function chipBlock(title, list, field, ctx) {
  const cur = ctx.run.current;
  const box = el('div.choice-block', {}, el('h2.small', {}, title));
  const row = el('div.chips.wrap');
  list.forEach(function (item) {
    row.appendChild(el('button.chip', {
      class: cur[field] === item ? 'is-picked' : '',
      onclick: function () { cur[field] = item; ctx.save(); ctx.render('verdict'); }
    }, item));
  });
  box.appendChild(row);
  return box;
}
