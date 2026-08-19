import type { Principle } from "./types";

/** Cross-cutting commitments, shown on the home page and the About page. */
export const principles: Principle[] = [
  {
    title: "Pre-specified and transparent",
    description:
      "Protocols, analysis plans and review protocols are written and, where appropriate, registered before the work starts. We report to the relevant guideline (CONSORT, STROBE, PRISMA, TRIPOD+AI, ACCORD) every time.",
  },
  {
    title: "Reproducible by default",
    description:
      "Every analysis ships as version-controlled code with a data dictionary. You — or a reviewer — can re-run it and get the same numbers.",
  },
  {
    title: "Automation with a human in charge",
    description:
      "We use large language models to remove drudgery, never to replace judgement. Every automated step is validated against human work, disclosed and auditable.",
  },
  {
    title: "Honest about uncertainty",
    description:
      "We say what the data can and cannot support. A sample-size memo that flags a fragile assumption is worth more than one that hides it.",
  },
  {
    title: "Data protection built in",
    description:
      "Patient data stays within the client's infrastructure and under a data-processing agreement. Our public tools use synthetic data and run in the browser.",
  },
  {
    title: "Independent",
    description:
      "We have no stake in the result. Our only deliverable is a method that holds.",
  },
];
