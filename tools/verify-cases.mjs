#!/usr/bin/env node
// Plays EVERY loaded case perfectly in real Chromium and asserts the score is 100/100.
//
//   node tools/verify-cases.mjs                        # all cases
//   node tools/verify-cases.mjs --url http://… --only case-01,case-03
//
// A perfect reading must score exactly 100: every page filed at its anchor, every true
// falsehood marked, the case's own key named, no ink spent. Anything less means the case file
// contradicts itself (an anchor that is not in `slots`, a contradiction naming a fragment twice,
// a key that cannot be reached, two fragments claiming one slot). This is the manager's check —
// a case author's report is not evidence that their case works.

import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import path from 'node:path';

const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf('--' + n); return i === -1 ? d : args[i + 1]; };
const URL_BASE = opt('url', 'http://127.0.0.1:8130/index.html');
const ONLY = opt('only', '').split(',').filter(Boolean);

const CHROME = [
  path.join(homedir(), '.cache/ms-playwright/chromium-1148/chrome-linux/chrome'),
  path.join(homedir(), '.cache/ms-playwright/chromium_headless_shell-1148/chrome-linux/headless_shell'),
  '/usr/bin/chromium'
].find((p) => existsSync(p));
if (!CHROME) { console.error('no chromium'); process.exit(2); }

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const PORT = 9500 + (process.pid % 400);

const child = spawn(CHROME, ['--headless=new', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage',
  '--hide-scrollbars', '--mute-audio', '--remote-debugging-port=' + PORT, '--window-size=1440,1000', 'about:blank'],
  { stdio: ['ignore', 'ignore', 'pipe'] });

let stderr = '';
child.stderr.on('data', (d) => { stderr += d; });

async function target() {
  for (let i = 0; i < 60; i++) {
    try {
      const list = await (await fetch('http://127.0.0.1:' + PORT + '/json/list')).json();
      const page = list.find((t) => t.type === 'page');
      if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch (e) { /* not up */ }
    await sleep(250);
  }
  throw new Error('no page target\n' + stderr.slice(-400));
}

class CDP {
  constructor(ws) { this.ws = ws; this.id = 0; this.pending = new Map(); this.errors = []; }
  static async open(url) {
    const ws = new WebSocket(url);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = () => rej(new Error('ws')); });
    const c = new CDP(ws);
    ws.onmessage = (ev) => {
      const m = JSON.parse(ev.data);
      if (m.id && c.pending.has(m.id)) {
        const { resolve, reject } = c.pending.get(m.id);
        c.pending.delete(m.id);
        m.error ? reject(new Error(JSON.stringify(m.error))) : resolve(m.result);
      } else if (m.method === 'Runtime.exceptionThrown') {
        c.errors.push(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
      }
    };
    await c.send('Runtime.enable'); await c.send('Page.enable');
    return c;
  }
  send(method, params = {}) {
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      setTimeout(() => { if (this.pending.delete(id)) reject(new Error(method + ' timed out')); }, 30000);
    });
  }
  async eval(expression) {
    const r = await this.send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text);
    return r.result.value;
  }
}

const cdp = await CDP.open(await target());
await cdp.send('Page.navigate', { url: URL_BASE });
for (let i = 0; i < 50; i++) {
  await sleep(200);
  if (await cdp.eval('!!document.querySelector("#app .screen") && !!window.ARCHIVE').catch(() => false)) break;
}

const ids = await cdp.eval('window.ARCHIVE.cases.map(c => c.id)');
const cases = ONLY.length ? ids.filter((id) => ONLY.includes(id)) : ids;

console.log('\n  ARCHIVE — perfect-play verification (' + cases.length + ' case(s))\n');
let failures = 0;

for (const id of cases) {
  const setup = await cdp.eval(`(() => {
    const { ctx, S } = window.ARCHIVE;
    const c = window.ARCHIVE.cases.find(x => x.id === ${JSON.stringify(id)});
    ctx.run = ctx.run || ctx.startRun();
    ctx.run.caseIndex = Math.max(0, ctx.run.cases.indexOf(c.id));
    ctx.run.ink = 5;
    ctx.run.current = S.freshCaseState();
    ctx.run.results = [];
    c.fragments.forEach(f => S.place(ctx.run, f.id, f.anchor));
    c.contradictions.forEach(k => S.toggleMark(ctx.run, k.a, k.b));
    ctx.run.current.verdict = c.key.verdict;
    ctx.run.current.virtue = c.key.virtue;
    ctx.run.current.wound = c.key.wound;
    ctx.caseDef = c;
    ctx.save();
    ctx.render('verdict');
    return { title: c.title, frags: c.fragments.length, marks: c.contradictions.length };
  })()`);

  await sleep(260);
  const sealed = await cdp.eval(`(() => {
    const b = [...document.querySelectorAll('button')].find(x => /seal the file/i.test(x.textContent));
    if (!b) return 'no-seal-button';
    if (b.disabled) return 'seal-disabled';
    b.click();
    return 'ok';
  })()`);

  await sleep(420);
  const probe = await cdp.eval(`(() => {
    const { ctx } = window.ARCHIVE;
    const r = ctx.run.results[ctx.run.results.length - 1] || {};
    const epi = document.getElementById('app').innerText || '';
    return { clarity: r.clarity, rank: r.rank, counts: r.counts, detail: r.detail, epilogue: /what actually happened/i.test(epi), next: /next file|close the archive/i.test(epi) };
  })()`);

  const c = probe.counts || {};
  const ok = sealed === 'ok' && probe.clarity === 100 && probe.epilogue && probe.next;
  if (!ok) failures++;
  console.log('  ' + (ok ? 'ok  ' : 'FAIL') + ' ' + id.padEnd(11) + String(setup.title).slice(0, 34).padEnd(34) +
    ' clarity ' + String(probe.clarity).padEnd(4) + ' rank ' + String(probe.rank || '-').padEnd(2) +
    ' pages ' + (c.slotHits || 0) + '/' + (c.fragments || 0) +
    ' marks ' + (c.hits || 0) + ' (false ' + (c.falsePositives || 0) + ')');
  if (!ok) console.log('        ' + JSON.stringify({ sealed, clarity: probe.clarity, detail: probe.detail, epilogue: probe.epilogue, next: probe.next }).slice(0, 260));
}

if (cdp.errors.length) { console.log('\n  page errors:\n   ' + cdp.errors.join('\n   ').slice(0, 600)); failures += cdp.errors.length; }

console.log('\n  ' + (failures ? failures + ' failure(s)' : 'every case scores 100/100 on a perfect reading') + '\n');
child.kill('SIGKILL');
process.exit(failures ? 1 : 0);
