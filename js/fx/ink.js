// Effects: progressive reveal of document text, and paper sounds.
// Minimal by design; the whole file is owned by one hand in round 1 and may be rewritten
// completely, as long as this surface stays: ink.reveal(el), ink.sound(name), ink.on().

let ctxAudio = null;
let enabled = false;

const SOUNDS = { paper: 1, stamp: 1, ask: 1 };

export const ink = {
  on: function () {
    handle().resume().then(function () { enabled = true; });
    return enabled;
  },

  sound: function (name) {
    if (!SOUNDS[name]) return;
    try {
      const ac = handle();
      const t = ac.currentTime;
      const g = ac.createGain();
      g.gain.value = 0.0001;
      const o = ac.createOscillator();
      o.type = name === 'stamp' ? 'triangle' : 'sine';
      o.frequency.value = name === 'stamp' ? 90 : 1400;
      const f = ac.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = name === 'stamp' ? 300 : 2400;
      o.connect(f); f.connect(g); g.connect(ac.destination);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(name === 'stamp' ? 0.25 : 0.03, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + (name === 'stamp' ? 0.22 : 0.09));
      o.start(t);
      o.stop(t + 0.3);
    } catch (e) { /* silence is also a valid Archive */ }
  },

  // progressive reveal: splits the element's own text into spans and fades them in
  reveal: function (node, speed) {
    if (!node || !node.textContent) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const text = node.textContent;
    node.textContent = '';
    const frag = document.createDocumentFragment();
    const words = text.split(/(\s+)/);
    words.forEach(function (w, i) {
      if (!w.trim()) { frag.appendChild(document.createTextNode(w)); return; }
      const s = document.createElement('span');
      s.className = 'rv';
      s.textContent = w;
      s.style.animationDelay = ((speed || 26) * i) + 'ms';
      frag.appendChild(s);
    });
    node.appendChild(frag);
  }
};

function handle() {
  if (!ctxAudio) {
    const AC = window.AudioContext || window.webkitAudioContext;
    ctxAudio = new AC();
  }
  return ctxAudio;
}
