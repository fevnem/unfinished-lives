# Contributing

The whole game is one static folder and one frozen contract. There is no build step, no
dependency and no test framework — so contributing is short.

## The one thing worth contributing: a case

A case is **one file**, `js/content/case-NN.js`, exporting a default object. You never edit
anything else: the registry picks the file up on reload, the desk plays it, and the linter tells
you what is wrong with it.

```bash
python3 -m http.server 8130        # play what you wrote
node tools/lint-cases.mjs          # validate every case against the contract
node tools/verify-cases.mjs --only case-NN   # play yours perfectly; must score 100/100
```

Read, in this order:

1. [`README.md#adding-a-case`](README.md#adding-a-case) — the field-by-field contract.
2. [`js/content/case-00.js`](js/content/case-00.js) — the reference case. Copy its shape.
3. [`js/engine/vocab.js`](js/engine/vocab.js) — the frozen vocabulary. Spellings matter.
4. [`js/engine/rules.js`](js/engine/rules.js) — how a case is actually scored.

### What makes a good case

- **The record is the villain.** The misreading must be bureaucratic: a form with the wrong two
  fields, a clerk who interviewed only one witness, a page bound in the wrong order.
- **The deduction must be earned from paper.** A reader who files every page and weighs every
  quantity should be able to reach the truth without guessing. No mind-reading, no narrator.
- **Dull documents, precise numbers.** Initials, quantities, dates, a signature that does not
  match. The horror is in the arithmetic.
- **The truth must contradict at least one page's surface reading.** If everything in the pile
  already says what happened, there is no case.
- **One `margin` fragment per case** in the previous Archivist's unexplained hand — the meta-arc
  is assembled from those, so hint; never explain.
- **No real people.** No slurs, no graphic violence. The tone is archival and restrained:
  plain, precise, humane.

## Areas beyond cases

The engine (`js/engine/`) and the desk (`js/ui/`) are deliberately small and dependency-free.
Useful contributions there are layout and accessibility work in `css/`, and better procedural
audio/reveal work in `js/fx/ink.js` — that module must never throw, never fetch anything and never
resume an `AudioContext` outside a user gesture.

## Before you open a pull request

```bash
node tools/lint-cases.mjs        # 0 errors
node tools/verify-cases.mjs      # every case scores 100/100 on a perfect reading
node tools/screens.mjs           # a full session plays through with no page errors
```

All three must pass. They are run in a real headless Chromium over raw CDP, not a mock — if they
pass locally they will pass in review.

## Style

Match the existing files: ES modules, no semicolon-free cleverness, small functions, comments that
explain *why*. Keep the repository free of generated artifacts and build output — the game is the
source.
