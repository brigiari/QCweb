# Design handoff — what we need from the designer

A checklist to send to the graphic designer together with a link to the
running site. Getting these up front avoids most back-and-forth.

## Files

- [ ] Home page mockup at desktop width (ideally 1440 px) — PNG/PDF and, if
      possible, the source (Figma link with view access, or .ai/.sketch).
- [ ] Mobile version of the home page (≈ 390 px) **or** a note saying "use your
      judgement" for stacking behaviour.
- [ ] Optional: one inner page (e.g. a service page) so the system extends
      beyond the home.
- [ ] Logo: SVG (full wordmark + standalone mark), on light and dark
      backgrounds; a square version for favicon / social.
- [ ] Any illustrations, icons or photos as SVG/PNG at 2×, with licence
      information.

## Style values (exact, not "roughly")

- [ ] Colour palette in hex: primary, secondary/accent, neutrals (background,
      surface, text, muted text, borders), plus states (hover, focus).
- [ ] Typefaces: family names, weights used, source (Google Fonts, Adobe,
      purchased licence → we need the font files to self-host).
- [ ] Type scale: sizes and line-heights for H1–H3, body, small.
- [ ] Spacing rhythm: base unit (e.g. 8 px), section padding, container width.
- [ ] Corner radius, border width, shadows.
- [ ] Buttons: primary/secondary looks, hover/focus states.

## Structure questions to agree on

- [ ] Which blocks are on the home page, in which order? (Current draft: hero →
      three areas → principles → tools → contact CTA.)
- [ ] Does the header stay fixed on scroll? Is there a "Get in touch" button in
      the header?
- [ ] Footer content: columns, what goes where, legal line.
- [ ] Accessibility: text/background contrast ≥ 4.5:1 for body text; visible
      focus state; no information conveyed by colour alone.

## How it will be integrated

The site already separates content from design. We will:

1. Translate palette + fonts into the token file (`src/app/globals.css`).
2. Rebuild the home sections to match the mockup.
3. Publish a preview URL for review on real devices; iterate from there.

The designer does not need to touch code; a PNG plus the values above is
enough to start.
