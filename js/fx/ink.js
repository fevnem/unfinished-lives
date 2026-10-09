// Effects: the sound and motion of a paperwork afterlife — procedural, no assets.
//
// Surface kept from the stub, and unchanged for its callers:
//   ink.on()             unlock audio from inside the first user gesture
//   ink.sound(name)      play 'paper' | 'stamp' | 'ask' (unknown names are silent)
//   ink.reveal(node, ms) progressively disclose an element's own text
// Extras the manager may use:
//   ink.paper() / ink.stamp() / ink.ask()     named shortcuts
//   ink.ambience(bool)                        a barely-there room tone, opt-in
//   ink.mute(bool)                            master mute (no arg = toggle), returns state
//
// Two independent systems, both asset-free:
//   * Audio  — a small WebAudio synth. The AudioContext is created and resumed ONLY inside a
//              user gesture (ink.on()). Every sound call is a silent no-op until then. Voices
//              are individually shaped and summed through a shared compressor so repeats cannot
//              clip. There are no loops and no timers left running (stops are scheduled on the
//              audio clock).
//   * Motion — ink.reveal() splits an element's own text into per-word `.rv` spans and staggers
//              their CSS animation. The keyframes live in base.css; JS sets only the delay.
//
// Nothing here may throw: a missing/suspended/odd AudioContext, an SSR-ish environment, unusual
// text, or a double call all degrade quietly to a no-op. The text is never lost.
'use strict';

/* ============================ audio ============================ */

let AC = null;        // the AudioContext, once a gesture has permitted one
let bus = null;       // every voice mixes here
let comp = null;      // shared compressor/limiter — keeps stacked voices off the ceiling
let master = null;    // master gain, also the mute control
let noiseBuf = null;  // one shared white-noise buffer
let ready = false;    // true once the context is actually running
let muted = false;    // master mute state
let ambient = null;   // { src, gain } while the room tone plays

const MASTER = 0.9;   // nominal master level
const FLOOR = 0.0001; // exponential ramps need a non-zero target

// Build (once) the context and its fixed graph: voices -> bus -> comp -> master -> out.
function ensureContext() {
  if (typeof window === 'undefined') return null;
  if (AC) return AC;
  try {
    const Ctor = window.AudioContext || window.webkitAudioContext;
    if (!Ctor) return null;
    AC = new Ctor();
    comp = AC.createDynamicsCompressor();
    comp.threshold.value = -16;
    comp.knee.value = 20;
    comp.ratio.value = 12;
    comp.attack.value = 0.003;
    comp.release.value = 0.25;
    master = AC.createGain();
    master.gain.value = muted ? FLOOR : MASTER;
    bus = AC.createGain();
    bus.gain.value = 1;
    bus.connect(comp);
    comp.connect(master);
    master.connect(AC.destination);
    return AC;
  } catch (e) {
    AC = bus = comp = master = null; // leave nothing half-built
    return null;
  }
}

// A short shared noise buffer, rebuilt only if the sample rate changes.
function noise(ac) {
  if (noiseBuf && noiseBuf.sampleRate === ac.sampleRate) return noiseBuf;
  const len = Math.max(1, Math.floor(ac.sampleRate * 1.2));
  const buf = ac.createBuffer(1, len, ac.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  noiseBuf = buf;
  return buf;
}

// A per-voice gain node with an attack/decay shape; returns the node to connect through.
function shape(ac, t0, peak, attack, decay) {
  const g = ac.createGain();
  const p = g.gain;
  p.setValueAtTime(FLOOR, t0);
  p.exponentialRampToValueAtTime(Math.max(peak, 0.0002), t0 + attack);
  p.exponentialRampToValueAtTime(FLOOR, t0 + attack + decay);
  return g;
}

// Stop a scheduled source at `when`, then disconnect it.
function release(node, ac, when) {
  try { node.stop(when); } catch (e) { /* already stopped */ }
  node.onended = function () { try { node.disconnect(); } catch (e) {} };
}

// paper — a soft rustle on selection.
function sfxPaper(ac, t0) {
  const src = ac.createBufferSource();
  src.buffer = noise(ac);
  src.playbackRate.value = 0.85 + Math.random() * 0.3;
  const hp = ac.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 800;
  const bp = ac.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 2400; bp.Q.value = 0.7;
  const g = shape(ac, t0, 0.14, 0.012, 0.13);
  src.connect(hp); hp.connect(bp); bp.connect(g); g.connect(bus);
  src.start(t0, Math.random() * 0.6);
  release(src, ac, t0 + 0.3);
}

// stamp — a low wooden thud, a tick, and a brief metallic ring.
function sfxStamp(ac, t0) {
  const o = ac.createOscillator(); o.type = 'sine';
  o.frequency.setValueAtTime(150, t0);
  o.frequency.exponentialRampToValueAtTime(56, t0 + 0.12);
  const g = shape(ac, t0, 0.5, 0.004, 0.18);
  o.connect(g); g.connect(bus);
  o.start(t0); release(o, ac, t0 + 0.34);

  const src = ac.createBufferSource(); src.buffer = noise(ac);
  const hp = ac.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 1600;
  const cg = shape(ac, t0, 0.16, 0.002, 0.03);
  src.connect(hp); hp.connect(cg); cg.connect(bus);
  src.start(t0, Math.random() * 0.4); release(src, ac, t0 + 0.08);

  const ring = [1860, 2420, 3180];
  for (let i = 0; i < ring.length; i++) {
    const ro = ac.createOscillator(); ro.type = 'sine';
    ro.frequency.value = ring[i] * (1 + (Math.random() - 0.5) * 0.012);
    const rg = shape(ac, t0, 0.05 / (i + 1), 0.006, 0.34 - i * 0.07);
    ro.connect(rg); rg.connect(bus);
    ro.start(t0); release(ro, ac, t0 + 0.5);
  }
}

// ask — a brief ink-scratch: filtered noise with a downward sweep.
function sfxAsk(ac, t0) {
  const src = ac.createBufferSource(); src.buffer = noise(ac);
  src.playbackRate.value = 1.1;
  const bp = ac.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 1.1;
  bp.frequency.setValueAtTime(1500, t0);
  bp.frequency.exponentialRampToValueAtTime(850, t0 + 0.17);
  const g = ac.createGain();
  g.gain.setValueAtTime(FLOOR, t0);
  g.gain.exponentialRampToValueAtTime(0.085, t0 + 0.02);
  g.gain.exponentialRampToValueAtTime(FLOOR, t0 + 0.17);
  src.connect(bp); bp.connect(g); g.connect(bus);
  src.start(t0, Math.random() * 0.6);
  release(src, ac, t0 + 0.24);
}

const VOICES = {
  paper: sfxPaper, rustle: sfxPaper, select: sfxPaper,
  stamp: sfxStamp, seal: sfxStamp,
  ask: sfxAsk, question: sfxAsk, scratch: sfxAsk
};

function fadeAmbient() {
  const a = ambient;
  ambient = null;
  if (!a) return;
  try {
    if (AC) a.gain.gain.setTargetAtTime(FLOOR, AC.currentTime, 0.3);
    a.src.stop((AC ? AC.currentTime : 0) + 1.1);
  } catch (e) { /* never started */ }
  a.src.onended = function () { try { a.src.disconnect(); } catch (e) {} };
}

/* ============================ motion ============================ */

const revealed = new WeakSet(); // nodes already split — makes reveal() idempotent

function reducedMotion() {
  try {
    return !!(typeof window !== 'undefined' && window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  } catch (e) { return false; }
}

// Walk the subtree; split each text node into per-word `.rv` spans, keep whitespace intact as
// text nodes. Wrapping happens per text node, so a failure can never blank the element, and
// the concatenated text is identical before and after. `state.i` keeps one running word index
// across the whole subtree, so delays read in order even through nested elements.
function splitWords(parent, step, state) {
  const kids = Array.prototype.slice.call(parent.childNodes);
  for (let k = 0; k < kids.length; k++) {
    const child = kids[k];
    if (child.nodeType === 3) {
      const text = child.nodeValue || '';
      if (!/\S/.test(text)) continue; // pure whitespace: leave it alone
      const frag = document.createDocumentFragment();
      const parts = text.split(/(\s+)/); // capture runs, so multiple spaces survive exactly
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (part === '') continue;
        if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); continue; }
        const span = document.createElement('span');
        span.className = 'rv';
        span.textContent = part; // punctuation-only tokens land here too
        span.style.animationDelay = (state.i * step) + 'ms';
        state.i += 1;
        frag.appendChild(span);
      }
      parent.replaceChild(frag, child);
    } else if (child.nodeType === 1) {
      splitWords(child, step, state);
    }
  }
}

/* ============================ public ============================ */

export const ink = {
  // Unlock audio from inside a user gesture. Safe to call repeatedly.
  on: function () {
    if (typeof window === 'undefined') return false;
    const ac = ensureContext();
    if (!ac) return false;
    try {
      if (ac.state === 'suspended' && typeof ac.resume === 'function') {
        const p = ac.resume();
        if (p && typeof p.then === 'function') p.then(function () { ready = true; }, function () {});
      } else {
        ready = ac.state !== 'suspended';
      }
    } catch (e) { ready = false; }
    return ready;
  },

  // Play a named sound. Silent until on() has run, and if muted.
  sound: function (name) {
    try {
      if (!AC || AC.state !== 'running' || muted) return;
      const voice = VOICES[name];
      if (!voice) return;
      voice(AC, AC.currentTime + 0.001);
    } catch (e) { /* silence is also a valid Archive */ }
  },

  paper: function () { ink.sound('paper'); },
  stamp: function () { ink.sound('stamp'); },
  ask: function () { ink.sound('ask'); },

  // Master mute. No argument toggles. Returns the resulting state.
  mute: function (on) {
    muted = (on === undefined) ? !muted : !!on;
    try {
      if (master && AC) master.gain.setTargetAtTime(muted ? FLOOR : MASTER, AC.currentTime, 0.02);
    } catch (e) {}
    return muted;
  },

  // A very quiet, opt-in room tone. Never a melody; fades in/out.
  ambience: function (on) {
    try {
      if (!on) { fadeAmbient(); return; }
      if (!AC || AC.state !== 'running' || ambient || muted) return;
      const src = AC.createBufferSource();
      src.buffer = noise(AC); src.loop = true;
      const hp = AC.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 55;
      const lp = AC.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 420; lp.Q.value = 0.6;
      const g = AC.createGain(); g.gain.value = FLOOR;
      src.connect(hp); hp.connect(lp); lp.connect(g); g.connect(bus);
      g.gain.setTargetAtTime(0.012, AC.currentTime, 0.8);
      src.start();
      ambient = { src: src, gain: g };
    } catch (e) {}
  },

  // Progressive reveal: split the element's own text into per-word spans and stagger them.
  // No-op under reduced motion, idempotent, child-safe, and never loses a word.
  reveal: function (node, speed) {
    try {
      if (typeof document === 'undefined') return;
      if (!node || typeof node !== 'object' || !node.childNodes) return;
      if (revealed.has(node)) return;      // already disclosed — safe to call twice
      if (reducedMotion()) return;         // CSS leaves the text plainly visible
      revealed.add(node);
      const step = (typeof speed === 'number' && speed > 0) ? speed : 26;
      splitWords(node, step, { i: 0 });
    } catch (e) { /* a failed reveal is silent; the text is untouched */ }
  }
};
