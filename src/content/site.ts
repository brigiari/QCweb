import type { SiteConfig } from "./types";

/**
 * Site-wide settings.
 *
 * TODO before going live (search for "TODO" across src/content):
 *  - contactEmail: the real mailbox (currently a placeholder)
 *  - url: the final domain once registered
 *  - legal.*: identifiers from the visura camerale
 */
export const site: SiteConfig = {
  name: "Quantum Care",
  legalName: "Quantum Care S.r.l.s.",
  tagline: "Methodology, statistics and evidence for clinical research.",
  description:
    "Quantum Care is an independent consultancy supporting clinical research: study design and biostatistics, evidence synthesis and guideline methodology, and research tools that automate the repetitive parts of the work.",
  // TODO: replace with the final domain (no trailing slash).
  url: "https://quantumcare.example",
  locale: "en",
  // TODO: replace with the real contact address.
  contactEmail: "info@quantumcare.example",
  location: "Umbria, Italy",
  social: [{ label: "GitHub", href: "https://github.com/brigiari" }],
  process: [
    {
      title: "Discovery call",
      description:
        "A short conversation to understand the research question, the stage of the project, constraints and timelines. Free, no commitment.",
    },
    {
      title: "Scoping and proposal",
      description:
        "We write down what will be delivered, by when and at what cost, and we flag the methodological risks we already see.",
    },
    {
      title: "Work with checkpoints",
      description:
        "We work in short, reviewable increments. You see intermediate results early — a draft sample-size memo, a screening sample, an analysis mock-up — so nothing arrives as a surprise.",
    },
    {
      title: "Deliverables and handover",
      description:
        "Documents, code and data dictionaries are delivered in a form your team can re-run and build on. We remain available for questions, reviewer responses and follow-up analyses.",
    },
  ],
  legal: {
    // TODO: fill from visura camerale. Italian company websites must display
    // these (art. 2250 c.c., art. 7 D.Lgs. 70/2003).
    registeredOffice: "Umbertide (PG), Italy",
    vatNumber: "IT — TODO",
    reaNumber: "PG — TODO",
    shareCapital: "€ 100,00 i.v.",
    pec: "TODO",
  },
};
