# The Archive of Unfinished Lives

A browser game with no build step. Vanilla ES modules, one static folder, served by any
static file server.

```
python3 -m http.server 8130
```

## The idea

You are Archivist #45 in the **Department of Unfinished Lives** — a bureaucratic afterlife
where every soul arrives with an incomplete record. You are given the fragments the dead
left behind: a letter, a receipt, a form someone signed in a hurry. You place them on a
timeline, mark the contradictions, spend your **ink** to ask the soul a few questions, and
seal a verdict: **Release**, **Return**, or **Retain**.

The Archive is not neutral. Files arrive out of order. Some pages have been removed by hand.
A previous Archivist's handwriting starts appearing in the margins of cases they never
touched.

## Structure

```
index.html              shell, stylesheet + module entry
css/
  base.css              typography, palette, layout (frozen)
  fragments.css         the fragment card system
  timeline.css          timeline + slot system
  responsive.css        small screens
js/
  main.js               bootstrap
  engine/
    vocab.js            FROZEN vocabulary: verdicts, virtues, wounds, kinds
    store.js            run state, localStorage save/load
    rules.js            scoring + ranks
    registry.js         case loader (tolerates a missing case file)
  ui/
    dom.js              tiny DOM helper
    screens.js          router, title, briefing, epilogue, summary, manual
    desk.js             the desk: pile, timeline, contradictions, questions
    verdict.js          verdict form + seal
  fx/
    ink.js              typewriter reveal, paper sounds (progressive)
  content/
    case-00.js          reference case + tutorial (see below)
    case-01.js …        one file per case, one author per file
    case-meta.js        the finale
tools/
  lint-cases.mjs        validates every case against the contract
```

## The case contract (FROZEN)

Every case is one file, `js/content/case-NN.js`, exporting a default object. Nothing else
may be edited by a case author. Run `node tools/lint-cases.mjs` to self-check.

```js
export default {
  id: 'case-01',                 // must equal the filename
  order: 1,                      // play order; 0 = tutorial, 99 = finale
  title: 'The Weight of Small Debts',
  subtitle: 'File 114-B · Closed 1974',
  difficulty: 2,                 // 1–5
  era: '1931–1974',
  dossier: { name, alias, age, occupation, place, cause, entry, registrar },
  intake: 'One paragraph from the intake officer. Sets the tone.',
  slots: ['1931','1938','1946','1955','1963','1971'],   // 5–9 years
  fragments: [{
    id: 'c01-f1',                // unique across all cases: <caseid>-f<n>
    kind: 'letter',              // letter|form|receipt|transcript|photo|object|margin
    label: 'Short title',
    text: 'One to four sentences of the actual document text.',
    anchor: '1946',              // MUST be one of slots
    note: 'Optional archivist annotation.',   // optional
    unlocks: 'q1'                // optional: question id unlocked when placed correctly
  }],
  contradictions: [{ a: 'c01-f1', b: 'c01-f5', reason: 'One line: why these cannot both be true.' }],
  questions: [{ id: 'q1', cost: 1, requires: 'c01-f1', prompt: 'What you ask the soul.', answer: 'How they answer.' }],
  key: {
    virtue: 'Endurance',         // from VIRTUES in js/engine/vocab.js
    wound: 'Abandonment',        // from WOUNDS
    verdict: 'Release',          // Release|Return|Retain
    truth: 'Three to five sentences: what actually happened.'
  },
  epilogue: { Release: '…', Return: '…', Retain: '…' },
  foreshadow: 'One line that hints at the meta-story.'
}
```

Rules a case must satisfy (enforced by the linter):

- 7–11 fragments, at least 3 kinds, ids unique and prefixed with the case id.
- 2–4 contradictions, each naming two real fragment ids; no fragment in two contradictions
  unless the case genuinely has three-way evidence.
- 3–6 questions; `requires` names a real fragment id, and `cost` is 1 or 2. Total question
  cost must exceed the ink you start with (5), so asking everything is impossible.
- Exactly one `anchor` per fragment is wrong-looking but true, and at least one fragment
  must sit in a slot that contradicts the others — the puzzle needs a real deduction.
- The truth must be **discoverable** and must contradict at least one fragment's surface
  reading. The best cases are about bureaucratic misreading: the record says one thing and
  the person was another.
- `foreshadow` must not name the meta-arc directly.

## Tone

Plain, precise, humane. No purple prose, no whimsy, no "the universe whispered". The
documents are dull on purpose — that is what makes the reading a discovery.
