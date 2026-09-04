# Design handoff — status and what is still needed

_Updated 2026-09-04. The designer's **version 1** (`graphics/version1/`, five
pages: HOME, SERVICE, ABOUT, CONTACTS, MENU) has been integrated in full._

## What was extracted from the files

The SVG/PDF exports have all text converted to outlines, so nothing had to be
guessed except the font names:

| Item | Source | Where it lives now |
|---|---|---|
| Palette (cream `#FDFBF1`, ink `#282626`, purple `#665CAD`, lavender `#BBB2FF`, sand `#E1DAC0`, grey `#BBBBBB`) | SVG fills | `src/app/globals.css` `@theme` |
| Type sizes (100 / 80 / 60 / 45 / 30 / 26 / 22 / 20 / 18 / 15 px) and line-heights | PDF text objects | component classes (pixel values) |
| Layout grid: 1512 canvas, 40 px left / 22 px right gutter, 471-wide cards, 8 px rules, 50 % cream insets | SVG rects | `Container`, section components |
| Wordmark, Q mark, ↗ / → arrows, hamburger, ×, + / − | SVG paths | `src/components/brand/` |
| Two gradient images | embedded JPEGs | `public/images/` |

## Fonts — needs confirmation

Identified visually (the files do not name them):

- **Headings:** Instrument Serif — free (Google Fonts), bundled at build time.
- **Body:** Helvetica Neue — Apple system font, used where installed (macOS,
  iOS); Inter is bundled as the fallback elsewhere (Windows, Android, Linux).

To ask the designer:

- [ ] Confirm both font names and the weights used (Regular + Bold for the sans).
- [ ] If the site must look identical on Windows too, a licensed Helvetica
      Neue webfont is needed (or agree that Inter is the fallback).

## Still missing from the design

- [ ] **Icons for "Typical clients"** (five grey circles are placeholders in
      the mockup and on the site).
- [ ] **Higher-resolution gradient images** — the embedded JPEGs are 337 × 597
      and 736 × 1194 px; they are blurry by design but will look soft on
      large retina screens. 2× exports (≈ 1800 px wide) would be ideal.
- [ ] **Mobile layout.** No mobile mockup was provided; the responsive
      behaviour (stacking, type clamping, full-screen menu on all pages) was
      decided in code. Worth a review on a phone.
- [ ] **Favicon / social image** from the Q mark.
- [ ] Copy that was lorem ipsum in the mockup has been written (side notes,
      About lede, FAQ page). Review welcome.

## Deviations from the mockup (deliberate)

- Header button reads "contact" on every page (the mockup has "contact" on
  HOME and "contacts" on inner pages).
- The FAQ eyebrow "Does another users already asked…" was corrected to
  "Has someone already asked what you are looking for?".
- Section eyebrows that were placeholders ("LOREM IPSUM") read "Services".
- Cards keep the mockup's 471 px width; long titles (e.g. DataPermit EU) may
  wrap differently because the mockup used the same placeholder text in every
  card.
