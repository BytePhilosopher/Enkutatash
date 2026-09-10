# 🌼 Enkutatash — New Year, New Me… Again?

A funny, shareable Ethiopian New Year (Enkutatash, 2019 E.C.) personality
quiz. Answer 6 painfully honest questions about your New Year resolutions
and get roasted with one of five personalities, a set of predictions for
your year, and a downloadable/shareable result card.

No accounts, no backend, no AI calls — just a fast, static Next.js app.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## How it works

- `src/data/questions.ts` — the 6 quiz questions, 5 options each (one per
  personality), some with an "easter egg" one-liner joke.
- `src/data/personalities.ts` — the 5 personalities (Procrastinator,
  Academic Weapon, Future Millionaire, I'm Leaving, Survivor), their
  descriptions, predictions, and shareable-card stats. Also holds the
  mock community distribution shown at the end (local data, no backend).
- `src/lib/scoring.ts` — tallies one point per answer; most points wins,
  ties break by a fixed priority order. Deliberately simple.
- `src/components/QuizApp.tsx` — the whole state machine: landing → quiz
  → analysis (loading) → result.
- `src/components/ResultCard.tsx` — the shareable 1080×1350 card,
  captured to PNG with `html-to-image` (`src/lib/cardGenerator.ts`) and
  shared via Telegram's share URL / clipboard (`src/lib/share.ts`).

## Notes / assumptions

The product spec this app was built from arrived starting at section 12
(predictions/easter eggs onward) — sections 1–11 covering the concept,
exact question copy, and personality list didn't come through. Everything
upstream of section 12 was inferred from context (Ethiopian New Year
2019 E.C., the 5 personalities and their percentages named in the
community section) and written from scratch:

- The 6 quiz questions and their exact wording (`data/questions.ts`).
- Full personality descriptions/taglines/predictions beyond the two
  example lines given (`data/personalities.ts`).
- Visual direction: warm Adey Abeba (Meskel daisy) yellow/gold + cream,
  a rounded display font (Baloo 2) for headings.

If there was more specific direction for any of that in the missing
sections, it's an easy swap in `data/questions.ts` / `data/personalities.ts`
— nothing else depends on the exact copy.
