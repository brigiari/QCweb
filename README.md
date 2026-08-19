# QCweb — Quantum Care website

Public website of **Quantum Care**, an independent consultancy for clinical
research: study design and biostatistics, evidence synthesis and guideline
methodology, and research tooling.

Next.js 16 · TypeScript · Tailwind CSS 4 · static export · MIT

> Status: **v0.1 — structure and first-draft content.** The visual design is a
> neutral placeholder; the real design is being produced separately and will be
> integrated on top (see [`docs/PLAN.md`](docs/PLAN.md)).

## Site map

| Route | Content |
|---|---|
| `/` | Home — hero, the three service areas, principles, tools, contact CTA |
| `/clinical-research/` | Clinical research methodology & biostatistics |
| `/evidence-synthesis/` | Evidence synthesis, consensus methods, clinical practice guidelines |
| `/research/` | Research & tools — methodological research, open-source projects (→ GitHub), custom automation |
| `/about/` · `/contact/` | Company, team, how to get in touch |
| `/privacy/` · `/legal/` | Privacy notice, mandatory company information |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run verify     # lint + typecheck + tests + static build (what CI runs)
npm run build      # writes the static site to ./out
npm start          # serves ./out locally
```

Requires Node ≥ 20.

## Where things live

```
src/content/      ← ALL copy: site settings, the three pillars, projects, principles, nav, about
src/app/globals.css  ← ALL design tokens (colours, fonts, radii)
src/components/   ← layout (header/footer), sections (hero, cards, CTA…), ui primitives, PillarPage
src/app/          ← routes (thin: compose components from content)
tests/            ← content integrity tests
docs/PLAN.md      ← information architecture, technical decisions, roadmap, open points
docs/DESIGN-HANDOFF.md ← checklist for the designer
.github/workflows ← CI (every push) and GitHub Pages deploy (push to main)
```

### Editing content

- Change copy: edit `src/content/pillars.ts` (service areas), `site.ts`
  (tagline, e-mail, legal data), `about.ts`, `principles.ts`.
- Add a project to the Research page: append to `src/content/projects.ts`.
- Run `npm test` — the tests check slugs, links and required fields.

Search for `TODO` in `src/content` for placeholders that must be replaced
before going live (contact e-mail, domain, legal identifiers, founder bio).

## Deployment

The site is a static export. Two zero-config options:

- **GitHub Pages** — `.github/workflows/deploy-pages.yml` builds and deploys on
  every push to `main`. One-time: *Settings → Pages → Source: GitHub Actions*.
  While served from `https://<user>.github.io/QCweb/`, the workflow sets
  `NEXT_PUBLIC_BASE_PATH=/QCweb`; remove it once a custom domain is attached.
- **Vercel** — import the repo; defaults work.

Before launch, set `site.url` in `src/content/site.ts` to the final domain
(used for the sitemap, robots and Open Graph tags).

## License

MIT — see [LICENSE.md](LICENSE.md). Content and brand assets of Quantum Care
are not covered by the code licence.
