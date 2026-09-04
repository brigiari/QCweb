/**
 * Content model for the Quantum Care website.
 *
 * Everything a visitor reads lives in `src/content/*.ts` and conforms to these
 * types. Components only render; they never hard-code copy.
 */

/** One of the three main service areas ("buckets"). */
export interface Pillar {
  /** URL segment, e.g. "clinical-research" → /clinical-research/ */
  slug: string;
  /** Small label above the title, e.g. "Methodology & biostatistics" */
  eyebrow: string;
  /** Full page title (may contain a line break hint with "\n"). */
  title: string;
  /** Short name for navigation and cards. */
  shortTitle: string;
  /** Name used in the full-screen menu. */
  menuTitle: string;
  /** One-line promise shown under the title. */
  tagline: string;
  /** 1–2 sentences used on cards (home page, "something else" section). */
  summary: string;
  /** Opening paragraphs of the pillar page: [0] = Approach, [1] = Team. */
  intro: string[];
  /** Grouped list of what we offer in this pillar. */
  services: ServiceGroup[];
  /** Typical clients / collaborators (five, shown as icons + captions). */
  audiences: string[];
  /** Optional pillar-specific engagement steps (falls back to site.process). */
  process?: ProcessStep[];
  /** Short Q&A shown in the FAQ accordion. */
  faqs?: Faq[];
  /** Call to action used on the Contact page cards and the page footer band. */
  cta: Cta;
  /** SEO description (≤ 160 chars). */
  seoDescription: string;
  /** Card tint on the home page / contact page. */
  tone: Tone;
}

export type Tone = "lavender" | "sand" | "grey" | "purple" | "dark" | "cream";

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
}

export interface ContactEntry {
  label: string;
  value: string;
  href?: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  /** Canonical public URL without trailing slash. Used for sitemap/OG tags. */
  url: string;
  locale: string;
  /** Primary mailbox used by every mailto: button. */
  contactEmail: string;
  /** Address table on the Contact page. */
  contacts: ContactEntry[];
  /** Social / external links on the Contact page and footer. */
  social: ContactEntry[];
  location: string;
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
