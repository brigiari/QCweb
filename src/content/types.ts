/**
 * Content model for the Quantum Care website.
 *
 * Everything a visitor reads lives in `src/content/*.ts` and conforms to these
 * types. Components only render; they never hard-code copy. This is what lets
 * us swap the visual design (when the mockup arrives) without touching text,
 * and later add an Italian version by providing a second content set.
 */

/** One of the three main service areas ("buckets"). */
export interface Pillar {
  /** URL segment, e.g. "clinical-research" → /clinical-research/ */
  slug: string;
  /** Small label above the title, e.g. "01 — Methodology" */
  eyebrow: string;
  /** Full page title. */
  title: string;
  /** Short name for navigation and cards. */
  shortTitle: string;
  /** One-line promise shown under the title. */
  tagline: string;
  /** 1–2 sentences used on cards (home page, footer). */
  summary: string;
  /** Opening paragraphs of the pillar page. */
  intro: string[];
  /** Grouped list of what we offer in this pillar. */
  services: ServiceGroup[];
  /** Typical clients / collaborators. */
  audiences: string[];
  /** Optional pillar-specific engagement steps (falls back to site.process). */
  process?: ProcessStep[];
  /** Short Q&A shown at the bottom of the page. */
  faqs?: Faq[];
  /** Call to action at the end of the page. */
  cta: Cta;
  /** SEO description (≤ 160 chars). */
  seoDescription: string;
}

export interface ServiceGroup {
  title: string;
  description: string;
  /** Concrete activities or deliverables, rendered as a bullet list. */
  items: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Cta {
  heading: string;
  body: string;
  buttonLabel: string;
  /** Pre-filled e-mail subject for the mailto link. */
  mailSubject: string;
}

/** A research / tooling project shown in the Research section. */
export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
  docsUrl?: string;
  status: ProjectStatus;
  tags: string[];
  /** Year the project started (shown as metadata). */
  since?: number;
}

export type ProjectStatus = "active" | "prototype" | "planned" | "archived";

/** Cross-cutting working principle (shown on home and about). */
export interface Principle {
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  /** Sub-items for a grouped menu (rendered flat on mobile). */
  children?: NavItem[];
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  /** Canonical public URL without trailing slash. Used for sitemap/OG tags. */
  url: string;
  locale: string;
  contactEmail: string;
  location: string;
  social: { label: string; href: string }[];
  /** Default engagement steps used by pillar pages without their own. */
  process: ProcessStep[];
  /** Company identifiers required on Italian company websites. */
  legal: LegalInfo;
}

export interface LegalInfo {
  registeredOffice: string;
  vatNumber: string;
  reaNumber: string;
  shareCapital: string;
  pec: string;
}
