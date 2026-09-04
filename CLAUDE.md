# QCweb — notes for coding agents

Public marketing website for Quantum Care (clinical-research methodology
consultancy). Next.js 16 App Router, TypeScript, Tailwind 4, **static export**.

## Non-negotiables

- **Content ↔ design separation.** Visitor-facing text lives only in
  `src/content/*.ts`. Components never hard-code copy. Colours/fonts live only
  in `src/app/globals.css` `@theme`.
- **Static only.** `output: "export"` — no server actions, no route handlers
  that read the request, no `next/image` default loader, no middleware.
- **Trailing slashes.** Internal hrefs end with `/` (`trailingSlash: true`).
- Keep `npm run verify` green (lint, typecheck, vitest, build).

## The design is the designer's mockup — follow it, don't reinterpret it

`graphics/version1/` (HOME, SERVICE, ABOUT, CONTACTS, MENU as SVG + PDF) is
the source of truth for the visual design. The site reproduces it 1:1 at the
1512 px canvas width:

- Palette and fonts: `globals.css` `@theme` (cream/ink/purple/lavender/sand/grey;
  Instrument Serif for headings with line-height 1; Helvetica Neue → Inter).
- Type sizes are the mockup's pixel values (100/80/60/45/30/26/22/20/18/15),
  written as Tailwind arbitrary values — do not replace them with a scale.
- Gutter is 40 px left / **22 px right** (the designer's frame); cards are
  471 px wide with 18 px gaps; rules are 8 px; insets are `bg-cream/50`.
- Brand glyphs (wordmark, Q mark, arrows, icons) are traced paths in
  `src/components/brand/` — don't substitute icon fonts.
- Below `lg` the layout stacks; there is no mobile mockup, so mobile decisions
  are ours (see `docs/DESIGN-HANDOFF.md`).

When a new design version arrives, diff it against `graphics/version1` and
change tokens/components accordingly; content stays in `src/content`.

## Layout of the work

- Three service areas ("pillars") are peers: `clinical-research`,
  `evidence-synthesis`, `research`. Rendered by `src/components/PillarPage.tsx`
  from `src/content/pillars.ts`. The Research route additionally injects
  `ProjectsSection` (GitHub repo links from `src/content/projects.ts`).
- Home = sequence of sections in `src/app/page.tsx`.
- `SiteHeader` is a client component: home variant (horizontal nav) vs inner
  variant (hamburger + wordmark), both with the full-screen lavender menu.
- Plan, decisions and roadmap: `docs/PLAN.md`.

## Placeholders

`grep -rn TODO src/content` lists what must be replaced before launch
(contact mailboxes, social URLs, domain, legal identifiers, founder bio).
Don't invent real values for these.
