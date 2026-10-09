<div align="center">

# The Archive of Unfinished Lives

**A bureaucratic afterlife, played one file at a time.**

Sort the paper a stranger left behind. Mark the pages that cannot both be true.
Spend your ink carefully, then sign a verdict on somebody you will never meet.

[![license: MIT](https://img.shields.io/badge/license-MIT-e9e2d0?style=flat-square&labelColor=17130e)](LICENSE)
[![dependencies: none](https://img.shields.io/badge/dependencies-none-e9e2d0?style=flat-square&labelColor=17130e)](#architecture)
[![build: not required](https://img.shields.io/badge/build-not%20required-e9e2d0?style=flat-square&labelColor=17130e)](#run-it)

<img src="docs/screens/01-title.png" alt="The title screen: a lamp-lit intake desk" width="820">

</div>

---

## What it is

You are Archivist #45 in the **Department of Unfinished Lives**. The dead arrive with their
paperwork incomplete: a rent receipt, a shift card, a deposition from a neighbour, a letter
somebody finally taught themselves to write. Your job is not to grieve. Your job is to file.

Each case gives you a pile of documents and a timeline of years. You decide which year each page
belongs to, you mark the two pages that cannot both be true, and you spend **ink** — five measures
per file, none carried over — asking the soul a few questions. Then you name the dominant virtue,
the dominant wound, and seal one of three verdicts: **Release**, **Return**, or **Retain**.

Most of the files are lies told in good handwriting. Not by villains, usually. By clerks.

## Why it is different

- **The puzzle is reading, not reflexes.** Every case hides one real deduction inside dull
  administrative prose — a date that cannot be right, a signature in the wrong hand, quantities
  that do not add up to the story the file tells about itself.
- **The record is the antagonist.** The misreading is always bureaucratic: the form had two fields
  for a woman and neither of them was "competent", so the file says *dependent*.
- **Judgement is scored, not merely clicked.** Naming the right virtue, the right wound and the
  right verdict is worth more than filing every page correctly. You can be tidy and still be wrong.
- **Ink is finite and it does not come back.** Asking everything is impossible by construction; the
  linter rejects any case where it is not.
- **No build step, no dependencies, no network calls.** Plain ES modules, one static folder.
- **There is a story under the story.** Every case ends with a line from the same unexplained hand
  in the margins. It is going somewhere, and the last file is yours.

## Run it

```bash
git clone https://github.com/fevnem/unfinished-lives
cd unfinished-lives
python3 -m http.server 8130
# open http://localhost:8130
```

Any static file server works — the game is `index.html` plus ES modules. No install, no build, no
`node_modules`.

## How to play

| | |
|---|---|
| **1. Read the pile** | Click a page to inspect it. Documents do not announce their year. |
| **2. File it** | With a page selected, click a year on the record — or press `1`–`9` to take a page from the pile and `Esc` to set it down. |
| **3. Mark falsehoods** | Select a filed page, press **Mark as false**, then select the page it contradicts. The registrar tells you how many to expect. |
| **4. Spend ink** | A question unlocks only after its page is filed. Five measures per file; asked questions are answered in the soul's own voice. |
| **5. Seal a verdict** | Name the dominant virtue, the dominant wound, and one of the three verdicts. A sealed verdict cannot be revised. |

<img src="docs/screens/03-desk.png" alt="The desk: the pile on the left, the record in the middle, the archivist's desk on the right" width="900">

Your reading is scored out of 100 and ranked — `S` is *the Archivist would have signed this*, `D` is
*the record goes back into the pile* — on **pages filed**, **falsehoods caught** (wrong marks cost
you), **virtue, wound and verdict**, and **ink left unspent**. Progress saves itself as you go.

## The files

Every case is one file in `js/content/`, written to a frozen contract, and validated by a linter
before it can ship. (`case-00` is the tutorial; `case-meta` is the finale.)

<!-- CASES -->

## Architecture

```
index.html              the shell
css/
  base.css              palette, typography, layout
  fragments.css         the document-card system (paper stock per kind)
  timeline.css          the record: years and slots
  responsive.css        small screens
js/
  main.js               bootstrap: load cases, restore the save, wire the router
  engine/
    vocab.js            frozen vocabulary — verdicts, virtues, wounds, kinds
    store.js            run state, localStorage save/load, transitions
    rules.js            scoring (pure) — pages, falsehoods, judgement, ink
    registry.js         case loader; a broken case file is skipped, not fatal
  ui/
    dom.js              tiny DOM helper (no framework, no virtual DOM)
    screens.js          router, title, intake, epilogue, shelved files, manual
    desk.js             the pile, the record, the contradictions, the questions
    verdict.js          the verdict form and the seal
  fx/
    ink.js              procedural paper sounds and progressive text reveal
  content/
    case-00.js          the tutorial (also the reference implementation)
    case-01.js …        one case per file, one author per file
    case-meta.js        the finale
tools/
  lint-cases.mjs        validates every case against the contract
  screens.mjs           drives a real Chromium over CDP: full playthrough + screenshots
assets/
  favicon.svg
```

### Adding a case

Write one file, `js/content/case-NN.js`, exporting a default object. Nothing else needs editing:
the registry picks it up, the linter validates it, the desk plays it. Run
`node tools/lint-cases.mjs` and it will tell you exactly what is missing.

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
  slots: ['1931', '1938', '1946', '1955', '1963', '1971'],   // 5–9 years
  fragments: [{
    id: 'case-01-f1',            // <caseid>-f<n>, unique
    kind: 'letter',              // letter|form|receipt|transcript|photo|object|margin
    label: 'Short title',
    text: 'One to four sentences of the actual document text.',
    anchor: '1946',              // the year it really belongs to — one of `slots`
    note: 'Optional archivist annotation.',
    unlocks: 'q1'                // optional: question id this page unlocks
  }],
  contradictions: [{ a: 'case-01-f1', b: 'case-01-f5', reason: 'Why these cannot both be true.' }],
  questions: [{ id: 'q1', cost: 1, requires: 'case-01-f1', prompt: 'What you ask.', answer: 'How they answer.' }],
  key: { virtue: 'Endurance', wound: 'Abandonment', verdict: 'Release', truth: 'What really happened.' },
  epilogue: { Release: '…', Return: '…', Retain: '…' },
  foreshadow: 'One line that hints at the meta-story.'
};
```

Rules the linter enforces: 7–11 fragments across at least 3 kinds; ids prefixed with the case id;
every anchor one of your `slots`; 2–4 contradictions naming real fragments; 3–6 questions whose
total cost **exceeds** the ink you start with, so asking everything is impossible; `key.virtue` and
`key.wound` from the frozen vocabulary; an epilogue for all three verdicts; exactly one `margin`
fragment — the previous Archivist's hand, hinting at the meta-arc without explaining it.

## Development

```bash
node tools/lint-cases.mjs          # validate every case file against the contract
node tools/screens.mjs             # drive the real game in headless Chromium (12 checks) + screenshots
node tools/screens.mjs --flow desk # just the desk screen
```

`screens.mjs` talks raw CDP to a local Chromium using Node's built-in `WebSocket` — no test
framework, no Puppeteer, no dependencies. It fails on any uncaught page error.

## Credits

Written and built by [Rakib Hasan](https://github.com/fevnem).

MIT licensed — see [LICENSE](LICENSE). The people in these files are invented. The paperwork
is not.
