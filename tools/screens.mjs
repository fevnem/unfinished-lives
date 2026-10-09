#!/usr/bin/env node
// Screenshot + smoke-test driver. Drives the local Chromium (Playwright's build) over raw
// CDP using Node's built-in WebSocket — no dependencies, no test framework.
//
//   node tools/screens.mjs                       # full playthrough, writes docs/screens/*.png
//   node tools/screens.mjs --url http://… --out … --flow desk --width 1440
//
// Exits non-zero if a screen fails to render or the page throws.

import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import path from 'node:path';

const args = process.argv.slice(2);
const opt = (name, dflt) => { const i = args.indexOf('--' + name); return i === -1 ? dflt : args[i + 1]; };

const URL_BASE = opt('url', 'http://127.0.0.1:8130/index.html');
const OUT = opt('out', 'docs/screens');
const WIDTH = parseInt(opt('width', '1440'), 10);
const HEIGHT = parseInt(opt('height', '980'), 10);
const FLOW = opt('flow', 'all');

const CHROME = [
  path.join(homedir(), '.cache/ms-playwright/chromium-1148/chrome-linux/chrome'),
  path.join(homedir(), '.cache/ms-playwright/chromium_headless_shell-1148/chrome-linux/headless_shell'),
  '/usr/bin/chromium', '/usr/bin/google-chrome'
].find((p) => existsSync(p));

if (!CHROME) { console.error('no chromium found'); process.exit(2); }

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const PORT = 9333 + (process.pid % 200);

const child = spawn(CHROME, [
  '--headless=new', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage',
  '--hide-scrollbars', '--force-color-profile=srgb', '--mute-audio',
  '--remote-debugging-port=' + PORT,
  '--window-size=' + WIDTH + ',' + HEIGHT,
  'about:blank'
], { stdio: ['ignore', 'ignore', 'pipe'] });

let stderr = '';
child.stderr.on('data', (d) => { stderr += d.toString(); });

async function target() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch('http://127.0.0.1:' + PORT + '/json/list');
      const list = await res.json();
      const page = list.find((t) => t.type === 'page');
      if (page && page.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch (e) { /* not up yet */ }
    await sleep(250);
  }
  throw new Error('chromium never exposed a page target\n' + stderr.slice(-600));
}

class CDP {
  constructor(ws) { this.ws = ws; this.id = 0; this.pending = new Map(); this.logs = []; }
  static async open(url) {
    const ws = new WebSocket(url);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = (e) => rej(new Error('ws error')); });
    const cdp = new CDP(ws);
    ws.onmessage = (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && cdp.pending.has(msg.id)) {
        const { resolve, reject } = cdp.pending.get(msg.id);
        cdp.pending.delete(msg.id);
        msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
      } else if (msg.method === 'Runtime.consoleAPICalled') {
        cdp.logs.push({ level: msg.params.type, text: (msg.params.args || []).map((a) => a.value ?? a.description ?? '').join(' ') });
      } else if (msg.method === 'Runtime.exceptionThrown') {
        cdp.logs.push({ level: 'exception', text: msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text });
      }
    };
    await cdp.send('Runtime.enable');
    await cdp.send('Page.enable');
    return cdp;
  }
  send(method, params = {}) {
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      setTimeout(() => { if (this.pending.has(id)) { this.pending.delete(id); reject(new Error(method + ' timed out')); } }, 30000);
    });
  }
  async eval(expr) {
    const r = await this.send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) throw new Error('eval threw: ' + (r.exceptionDetails.exception?.description || r.exceptionDetails.text));
    return r.result.value;
  }
  async click(text) {
    return this.eval(`(() => { const b=[...document.querySelectorAll('button,a')].find(x=>(x.textContent||'').trim().includes(${JSON.stringify(text)})); if(!b) return 'MISS:'+${JSON.stringify(text)}; b.click(); return 'ok'; })()`);
  }
  async shot(file) {
    await this.send('Emulation.setDeviceMetricsOverride', { width: WIDTH, height: HEIGHT, deviceScaleFactor: 1, mobile: false });
    const r = await this.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
    await writeFile(file, Buffer.from(r.data, 'base64'));
    return file;
  }
  async goto(url) {
    await this.send('Page.navigate', { url });
    for (let i = 0; i < 40; i++) {
      await sleep(200);
      const ready = await this.eval('document.readyState === "complete"').catch(() => false);
      const has = await this.eval('!!document.querySelector("#app .screen")').catch(() => false);
      if (ready && has) return true;
    }
    return false;
  }
}

const problems = [];
const check = (label, cond, extra) => {
  if (cond) console.log('  ok   ' + label);
  else { console.log('  FAIL ' + label + (extra ? ' — ' + extra : '')); problems.push(label); }
};

await mkdir(OUT, { recursive: true });
const wsUrl = await target();
const cdp = await CDP.open(wsUrl);

console.log('\n  driving ' + URL_BASE);
const loaded = await cdp.goto(URL_BASE);
check('page loads and mounts a screen', loaded);
await sleep(500);

const titleText = await cdp.eval('document.getElementById("app").innerText');
check('title screen renders', /Archive of\s+Unfinished Lives/.test(titleText), titleText.slice(0, 80));

// --- title ---
if (FLOW === 'all' || FLOW === 'title') {
  await cdp.shot(path.join(OUT, '01-title.png'));
  console.log('  shot ' + path.join(OUT, '01-title.png'));
}

if (FLOW === 'title') { await finish(0); }

// --- briefing ---
await cdp.eval('localStorage.clear()');
await cdp.goto(URL_BASE);
await cdp.click('Enter the Archive');
await sleep(600);
const briefText = await cdp.eval('document.getElementById("app").innerText');
check('briefing renders dossier + intake', /intake form/i.test(briefText) && /take the file/i.test(briefText));
if (FLOW === 'all' || FLOW === 'brief') { await cdp.shot(path.join(OUT, '02-briefing.png')); console.log('  shot ' + path.join(OUT, '02-briefing.png')); }
if (FLOW === 'brief') { await finish(0); }

// --- desk ---
await cdp.click('Take the file');
await sleep(700);
const cards = await cdp.eval('document.querySelectorAll(".pane-pile .frag").length');
const slots = await cdp.eval('document.querySelectorAll(".slot").length');
check('desk shows the pile and the years', cards >= 5 && slots >= 4, cards + ' cards, ' + slots + ' slots');

// click a page, then file it via the picker
const filed = await cdp.eval(`(() => {
  const c = document.querySelector('.pane-pile .frag');
  if (!c) return 'no card';
  c.click();
  return c.dataset.id;
})()`);
await sleep(400);
const pickerText = await cdp.eval("[...document.querySelectorAll('.slot-picker .chip')].map(c=>c.textContent).join(',')");
check('inspector offers the year picker', pickerText.length > 3, pickerText);
await cdp.eval(`(() => { const c=[...document.querySelectorAll('.slot-picker .chip')].find(x=>x.textContent.trim()==='1911'); if(c) c.click(); return 'ok'; })()`);
await sleep(500);
const filedNow = await cdp.eval('document.querySelectorAll(".slot .frag").length');
check('a page can be filed onto a year', filedNow >= 1, 'filed=' + filedNow + ' (' + filed + ')');

// ask a question (needs its page filed, ink is 5)
await cdp.eval('window.ARCHIVE.S.place(window.ARCHIVE.ctx.run, "case-00-f5", "1935"); window.ARCHIVE.ctx.save(); window.ARCHIVE.ctx.render("desk");');
await sleep(400);
const asked = await cdp.eval(`(() => { const b=[...document.querySelectorAll('.q button')].find(x=>!x.disabled); if(!b) return 'no askable question'; b.click(); return 'ok'; })()`);
await sleep(400);
check('a filed page unlocks a question you can ask', asked === 'ok', asked);
if (FLOW === 'all' || FLOW === 'desk') { await cdp.shot(path.join(OUT, '03-desk.png')); console.log('  shot ' + path.join(OUT, '03-desk.png')); }
if (FLOW === 'desk') { await finish(0); }

// --- play the case properly, then verdict + epilogue ---
await cdp.eval(`(() => {
  const { ctx, S } = window.ARCHIVE;
  const c = ctx.cases.find(x => x.id === 'case-00');
  c.fragments.forEach(f => S.place(ctx.run, f.id, f.anchor));
  S.toggleMark(ctx.run, 'case-00-f4', 'case-00-f5');
  S.toggleMark(ctx.run, 'case-00-f6', 'case-00-f7');
  ctx.run.current.verdict = 'Release';
  ctx.run.current.virtue = 'Devotion';
  ctx.run.current.wound = 'Abandonment';
  ctx.save();
  ctx.render('verdict');
})()`);
await sleep(500);
const verdictText = await cdp.eval('document.getElementById("app").innerText');
check('verdict screen renders the choices', /dominant virtue/i.test(verdictText) && /dominant wound/i.test(verdictText) && /verdict/i.test(verdictText));
if (FLOW === 'all' || FLOW === 'verdict') { await cdp.shot(path.join(OUT, '04-verdict.png')); console.log('  shot ' + path.join(OUT, '04-verdict.png')); }

await cdp.click('Seal the file');
await sleep(900);
const epi = await cdp.eval('document.getElementById("app").innerText');
check('epilogue reveals the truth and scores the reading', /what actually happened/i.test(epi) && /clarity/i.test(epi));
const score = await cdp.eval('(window.ARCHIVE.ctx.run.results[0]||{}).clarity');
console.log('  perfect play scores ' + score + '/100');
check('a correct reading scores highly', score >= 90, 'score=' + score);
if (FLOW === 'all' || FLOW === 'epilogue') { await cdp.shot(path.join(OUT, '05-epilogue.png')); console.log('  shot ' + path.join(OUT, '05-epilogue.png')); }

const noise = cdp.logs.filter((l) => l.level === 'exception' || l.level === 'error');
check('no uncaught page errors', noise.length === 0, noise.map((n) => n.text).join(' | ').slice(0, 300));

await finish(problems.length);

async function finish(code) {
  child.kill('SIGKILL');
  if (code) { console.log('\n  ' + problems.length + ' failure(s)\n'); }
  else console.log('\n  all screen checks passed\n');
  process.exit(code ? 1 : 0);
}
