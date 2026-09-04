import type { Faq } from "./types";
import { pillars } from "./pillars";

/** FAQ section (used on service pages, About and the dedicated /faq page). */
export const faqSection = {
  eyebrow: "Has someone already asked what you are looking for?",
  title: "Frequently Asked Questions",
};

export const faqPage = {
  title: "Frequently Asked Questions",
  lede: "The questions we are asked most often, across study design, evidence synthesis and research tooling. If yours is not here, write to us.",
};

/** General questions not tied to one service area. */
export const generalFaqs: Faq[] = [
  {
    question: "Where are you based, and do you work remotely?",
    answer:
      "We are based in Umbria, Italy, and work with teams across Italy and Europe. Most engagements run remotely with regular video calls; we travel for kick-offs, panel meetings and workshops when it helps.",
  },
  {
    question: "In which languages do you work?",
    answer:
      "Italian and English. Deliverables can be written in either, and we are used to bilingual projects — an Italian protocol with an English statistical analysis plan, for example.",
  },
  {
    question: "How do you charge?",
    answer:
      "By fixed quote for well-defined deliverables (a sample-size memo, a SAP, a review protocol) and by day rate for open-ended collaboration. Every proposal states what is included; there are no surprises at invoice time.",
  },
];

/** All questions, general first, then per service area in site order. */
export const allFaqs: { group: string; items: Faq[] }[] = [
  { group: "General", items: generalFaqs },
  ...pillars.map((p) => ({ group: p.shortTitle, items: p.faqs ?? [] })),
];
