# Quantum Care website — plan

_Last updated: 2026-08-19. This document is the working plan for the public
website. It is meant to be edited as decisions are made; the "Decisions" and
"Open points" sections are the ones to keep current._

## 1. Purpose and audience

The site has one job: make it easy for a potential client to understand what
Quantum Care does, trust that it is done rigorously, and get in touch.

Primary audiences, in order:

1. Clinical investigators and research units (hospitals, IRCCS, universities)
   looking for methodological / statistical support.
2. Scientific societies and guideline committees needing evidence synthesis,
   consensus methods or guideline methodology.
3. Companies (pharma, devices, CROs, health-tech) needing specialist capacity
   or custom research tooling.
4. Academic partners interested in joint methodological research.

Secondary: funders and evaluators who look up the company (bandi, partnerships),
and candidates.

## 2. Information architecture

```
/                      Home — hero, the three areas, principles, tools, contact CTA
/clinical-research/    Pillar 1 — Clinical research methodology & biostatistics
/evidence-synthesis/   Pillar 2 — Evidence synthesis, consensus & guidelines
/research/             Pillar 3 — Research & tools (incl. project cards → GitHub)
/about/                Who we are, how we collaborate, team
/contact/              Mailto CTAs with pre-filled subjects, per-area shortcuts
/privacy/              Privacy notice (static site, no cookies)
/legal/                Company identifiers (mandatory for Italian companies)
/sitemap.xml, /robots.txt, favicon
```

The three pillars are presented as **peers** (same template, same weight in
navigation), which matches how the business is described: methodology,
evidence, research & tools.

### Pillar content structure (shared template)

Every pillar page follows the same skeleton so visitors learn it once:

1. Header — eyebrow, title, tagline, 1–2 intro paragraphs
2. **What we offer** — 3–6 service groups, each with a short description and a
   bullet list of concrete activities / deliverables
3. _(optional pillar-specific section — Research adds the project list)_
4. Typical clients
5. How an engagement works (site-wide default, overridable per pillar)
6. FAQ (2–3 questions)
7. Call to action (pillar-specific subject line)

### Content per pillar (summary — full copy in `src/content/pillars.ts`)

| Pillar | Service groups |
|---|---|
| Clinical research | Study design & protocol · Sample size, power & simulation · Statistical analysis plans · Analysis & reporting · Data management & study operations · Training & methodological review |
| Evidence synthesis | Systematic reviews & meta-analysis · Scoping / rapid / umbrella / living reviews · LLM-assisted review workflows · Consensus-based recommendations (Delphi, NGT, RAND/UCLA) · Clinical practice guidelines (GRADE, EtD, AGREE II, SNLG) |
| Research & tools | Methodological research · Open-source tools (TrialScope, HarmonizeRx, DataPermit EU) · Custom automation for client teams |

## 3. Technical approach

| Decision | Choice | Why |
|---|---|---|
| Framework | Next.js 16 (App Router) + TypeScript | Same toolchain as TrialScope / HarmonizeRx / DataPermitEU; one skill set across repos |
| Styling | Tailwind CSS 4 with a semantic token layer in `globals.css` | Design can be re-skinned by editing tokens first, components second |
| Output | **Static export** (`output: "export"`) | No server, free hosting, trivially portable; everything the site needs is static |
| Hosting | GitHub Pages via Actions (workflow included); Vercel also works unchanged | Free, in the repo, automatic on push to `main` |
| Content | Typed TypeScript objects in `src/content/` | Content is reviewable in PRs, type-checked, and tested; no CMS to operate |
| Contact | `mailto:` with pre-filled subjects | Zero infrastructure; upgrade path to a form service later |
| Quality | ESLint, `tsc`, Vitest content tests, CI on every push | Same bar as the other repos |

### Content / design separation (the rule that makes the redesign cheap)

- `src/content/*` — every word a visitor reads. No JSX, no classes.
- `src/app/globals.css` — every colour, font, radius. Semantic names
  (`--color-accent`, not `--color-teal`).
- `src/components/*` — layout and markup only; they read content and tokens.
- `src/app/*` — thin routes that compose components.

When the mockup arrives, the work is: (1) map palette + fonts to tokens,
(2) rebuild `Hero` and whichever sections the design changes, (3) adjust
`SiteHeader` / `SiteFooter`. Content and routes stay as they are.

## 4. Integrating the designer's home page

Input expected: a static picture (PNG/PDF/Figma) of the home page, possibly
later of inner pages.

Steps:

1. **Extract tokens** — colours (hex), fonts (names + weights + where to get the
   files), spacing rhythm, corner radii, shadows → update `@theme` in
   `globals.css`. Wire fonts with `next/font/local` (self-hosted, no Google
   requests → simpler privacy notice).
2. **Map sections** — for each block in the mockup decide: existing section
   (restyle), new section (new component), or dropped. The home is a list of
   sections in `src/app/page.tsx`; reorder freely.
3. **Assets** — logo SVG, icons, illustrations/photos → `public/`. Images use
   `next/image` with `unoptimized` (already configured for static export);
   export at 1× and 2× widths.
4. **Responsive** — the mockup is desktop; we decide mobile behaviour per
   section and confirm with the designer.
5. **Inner pages** — apply the same tokens to `PillarPage`; if the designer
   provides inner-page layouts, adapt the template once and all three pillar
   pages follow.
6. **Review loop** — deploy preview (GitHub Pages or Vercel preview), designer
   reviews on real devices, iterate.

See `docs/DESIGN-HANDOFF.md` for the checklist of what to ask the designer for.

## 5. Roadmap

### v0.1 — Structure (this commit)
- [x] Stack, static export, CI, Pages deploy workflow
- [x] Content model + first draft of all copy
- [x] All pages rendering with a neutral placeholder design
- [x] Content integrity tests

### v0.2 — Real identity
- [ ] Replace placeholders: contact e-mail, domain, legal identifiers, founder bio
- [ ] Enable GitHub Pages in repo settings; first public preview
- [ ] Review and tighten copy (especially claims, tone, IT/EN terminology)

### v0.3 — Design integration
- [ ] Tokens + fonts from the mockup
- [ ] Home page rebuilt to the design; header/footer; favicon/logo
- [ ] Inner pages restyled; OG image (`opengraph-image`)

### v0.4 — Launch
- [ ] Custom domain + HTTPS; `site.url` updated; sitemap verified
- [ ] Privacy notice reviewed against what is actually deployed
- [ ] Search Console / basic uptime check

### Later / optional
- [ ] Italian version (second content set + `/it/` routes or a locale switch)
- [ ] Contact form (Formspree / Netlify Forms / Cloudflare Worker)
- [ ] Per-project pages under `/research/<slug>/` (generateStaticParams)
- [ ] Publications / talks list; blog or notes (MDX)
- [ ] Privacy-friendly analytics (Plausible / Umami) + updated privacy notice
- [ ] Case studies (anonymised) per pillar

## 6. Decisions

- **English first.** Most of the reachable market reads English; Italian is a
  planned second content set, not a translation layer bolted on later.
- **No CMS.** Content changes are commits; reviewable, versioned, testable.
- **Static only.** Anything needing a server (forms, analytics) goes through a
  third-party endpoint; the site itself stays a folder of files.
- **No cookies / scripts** until there is a reason; keeps the privacy notice
  honest and short.
- **Internal tools stay off the site.** Only public repositories are listed.

## 7. Open points (need the owner)

1. Final contact e-mail address and domain.
2. Company identifiers for `/legal/` (from the visura camerale).
3. Founder/team bio and whether to show names and photos.
4. Whether to mention "women-led" / impresa femminile as positioning.
5. Which projects are ready to be public on the site; any live demo URLs.
6. Tone check on the copy: formal vs conversational; use of "we".
