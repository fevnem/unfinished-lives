// Bootstrap. Owned by the manager: loads cases, restores the save, wires the router.

import { loadCases } from './engine/registry.js';
import * as S from './engine/store.js';
import { renderScreen } from './ui/screens.js';
import { ink } from './fx/ink.js';

const cases = await loadCases();
console.info('[archive] ' + cases.length + ' case file(s) recovered');

const ctx = {
  cases: cases,
  run: S.load(),
  caseDef: null,

  caseById: function (self, id) { return cases.find(function (c) { return c.id === id; }) || cases[0]; },

  startRun: function () {
    ctx.run = S.newRun(cases);
    S.save(ctx.run);
    return ctx.run;
  },

  save: function () { if (ctx.run) S.save(ctx.run); },

  render: function (name, payload) {
    ctx.screen = name;
    renderScreen(ctx, name, payload);
  },

  go: function (name, payload) {
    if (!ctx.run && name !== 'title' && name !== 'manual') { ctx.run = ctx.startRun(); }
    ctx.render(name, payload);
  }
};

// first gesture unlocks the audio context
document.addEventListener('pointerdown', function once() {
  ink.on();
  document.removeEventListener('pointerdown', once);
}, { once: true });

const boot = function () {
  ctx.render(ctx.run && ctx.run.caseIndex > 0 ? 'title' : 'title');
};

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && ctx.screen === 'manual') { ctx.go('title'); }
});

if (!cases.length) {
  document.getElementById('app').innerHTML = '<section class="screen"><h1 class="case-title">No case files recovered.</h1><p class="lede">Run <code>node tools/lint-cases.mjs</code> and reload.</p></section>';
} else {
  boot();
}

window.ARCHIVE = { ctx: ctx, cases: cases, S: S }; // debugging handle
