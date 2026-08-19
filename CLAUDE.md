# QCweb — notes for coding agents

Public marketing website for Quantum Care (clinical-research methodology
consultancy). Next.js 16 App Router, TypeScript, Tailwind 4, **static export**.

## Non-negotiables

- **Content ↔ design separation.** Visitor-facing text lives only in
  `src/content/*.ts`. Components never hard-code copy. Colours/fonts live only
  in `src/app/globals.css` `@theme` (semantic names).
- **Static only.** `output: "export"` — no server actions, no route handlers
  that read the request, no `next/image` default loader, no middleware.
- **Trailing slashes.** Internal hrefs end with `/` (`trailingSlash: true`).
- Keep `npm run verify` green (lint, typecheck, vitest, build).

## Layout of the work

- Three service areas ("pillars") are peers: `clinical-research`,
  `evidence-synthesis`, `research`. All rendered by `src/components/PillarPage.tsx`
  from `src/content/pillars.ts`. The Research route additionally injects
  `ProjectCards` (GitHub repo links from `src/content/projects.ts`).
- Home = sequence of sections in `src/app/page.tsx`.
- Plan, decisions and roadmap: `docs/PLAN.md`. Designer checklist:
  `docs/DESIGN-HANDOFF.md`.

## Design integration (pending)

A graphic designer is producing a static mockup of the home page. When it
arrives: map palette/fonts to tokens first, then rebuild `Hero` and affected
sections, then header/footer. Do not rewrite content to fit the design — adjust
the design or raise it.

## Placeholders

`grep -rn TODO src/content` lists what must be replaced before launch
(contact e-mail, domain, legal identifiers, founder bio). Don't invent real
values for these.
