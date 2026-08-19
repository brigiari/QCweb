import type { Pillar } from "./types";

/**
 * The three service areas. Order here = order everywhere (nav, home, footer).
 *
 * Copy is a first draft written to be credible for an independent
 * methodological consultancy; tighten, cut or translate freely. Each pillar
 * page is rendered from this object by `src/components/PillarPage.tsx`.
 */
export const pillars: Pillar[] = [
  // ---------------------------------------------------------------------------
  // 1. Clinical research methodology & biostatistics
  // ---------------------------------------------------------------------------
  {
    slug: "clinical-research",
    eyebrow: "01 — Methodology & biostatistics",
    title: "Clinical research methodology",
    shortTitle: "Clinical research",
    tagline: "From research question to defensible result.",
    summary:
      "Study design, sample size and simulation, statistical analysis plans, analysis and reporting — for trials, observational studies, registries and real-world evidence.",
    seoDescription:
      "Statistical and methodological support for clinical research: study design, sample size and simulation, analysis plans, analysis and reporting.",
    intro: [
      "Good clinical research is decided before the first patient is enrolled. We work alongside investigators and research teams from the moment a question takes shape, so that the design answers it, the sample size is justified, the analysis is pre-specified and the result can stand up to peer review.",
      "We are methodologists and biostatisticians, not a black box: every deliverable comes with the reasoning behind it and with code you can re-run.",
    ],
    services: [
      {
        title: "Study design and protocol development",
        description:
          "Turning a clinical question into a study that can answer it — choosing the design, the population, the comparator, the outcomes and the estimand.",
        items: [
          "Randomised trials: parallel, cluster, crossover, non-inferiority, adaptive and platform designs",
          "Observational studies: cohort, case–control, cross-sectional, registry-based and real-world evidence",
          "Diagnostic and prognostic studies, prediction-model studies",
          "Estimand framing (ICH E9(R1)), outcome hierarchy, handling of intercurrent events",
          "Protocol sections written to SPIRIT, STROBE, CONSORT, STARD and TRIPOD+AI reporting standards",
          "Feasibility assessment of eligibility criteria and recruitment assumptions",
        ],
      },
      {
        title: "Sample size, power and simulation",
        description:
          "Analytical calculations where they apply, simulation where they don't — with transparent assumptions and sensitivity scenarios you can defend to a committee or a reviewer.",
        items: [
          "Power and sample-size calculation for superiority, non-inferiority and equivalence designs",
          "Simulation-based power for complex designs: hierarchical, longitudinal, survival with non-proportional hazards, composite and ordinal outcomes",
          "Operating characteristics of adaptive and group-sequential designs",
          "Sensitivity analyses across effect sizes, drop-out, variance and recruitment assumptions",
          "A short, readable sample-size memo ready to be pasted into a protocol or grant",
        ],
      },
      {
        title: "Statistical analysis plans",
        description:
          "Pre-specifying the analysis protects the study from itself. We write SAPs that are precise enough to be executed and clear enough to be reviewed.",
        items: [
          "Analysis populations, estimands, primary and secondary analyses",
          "Missing-data strategy, multiplicity control, subgroup and sensitivity analyses",
          "Interim analyses and stopping rules",
          "Mock tables, listings and figures (TLF shells)",
          "Registration-ready text for trial registries and pre-registration platforms",
        ],
      },
      {
        title: "Statistical analysis and reporting",
        description:
          "Reproducible analysis in R or Python, reported in the format your audience needs — a manuscript, a study report, a committee slide deck.",
        items: [
          "Survival analysis, longitudinal and mixed-effects models, GEE, time-to-event with competing risks",
          "Causal inference for observational data: propensity scores, IPTW, target-trial emulation, g-methods",
          "Development and validation of prognostic and diagnostic prediction models, including machine-learning models, reported to TRIPOD+AI",
          "Registry and real-world data analysis, with explicit data-quality assessment",
          "Publication-ready tables and figures; methods and results sections; responses to statistical reviewers",
          "Version-controlled code and a data dictionary delivered with every analysis",
        ],
      },
      {
        title: "Data management and study operations",
        description:
          "Support for the practical side: capturing data that can actually be analysed.",
        items: [
          "CRF / eCRF design and variable coding, with the analysis in mind",
          "Data-validation rules and quality checks for trials and registries",
          "Harmonisation of variables across sites or datasets",
          "Interim data reviews and data-monitoring committee reports",
        ],
      },
      {
        title: "Training and methodological review",
        description:
          "Short, practical formats for clinical teams that want to become better at designing and reading studies.",
        items: [
          "Workshops on study design, sample size and common statistical pitfalls",
          "Independent methodological review of protocols, grant applications and manuscripts before submission",
          "Statistical support for journal clubs and residency programmes",
        ],
      },
    ],
    audiences: [
      "Clinical investigators and research units in hospitals and IRCCS",
      "University departments and PhD students",
      "Scientific societies running registries or multicentre studies",
      "Pharmaceutical, medical-device and diagnostics companies",
      "Contract research organisations needing overflow or specialist capacity",
    ],
    faqs: [
      {
        question: "Which software do you use?",
        answer:
          "R and Python for analysis, with reproducible, version-controlled projects. We can deliver in other environments (SAS, Stata) when a sponsor requires it; say so in the first call.",
      },
      {
        question: "Can you join a project that is already running?",
        answer:
          "Yes. Mid-study requests — a reviewer asking for a power justification, an analysis plan that needs to be written before unblinding, a re-analysis — are common. We start with a short review of what exists and tell you honestly what can and cannot be fixed at that stage.",
      },
      {
        question: "Do you co-author?",
        answer:
          "When our contribution meets authorship criteria (ICMJE) we are glad to co-author; otherwise an acknowledgement is fine. We agree on this at the proposal stage, not at submission.",
      },
    ],
    cta: {
      heading: "Designing or analysing a study?",
      body: "Tell us about the question, the data and the deadline. We reply within two working days with our initial thoughts and a proposed way forward.",
      buttonLabel: "Discuss your study",
      mailSubject: "Clinical research — study design / statistics",
    },
  },

  // ---------------------------------------------------------------------------
  // 2. Evidence synthesis, consensus & guidelines
  // ---------------------------------------------------------------------------
  {
    slug: "evidence-synthesis",
    eyebrow: "02 — Evidence-based medicine",
    title: "Evidence synthesis and guidelines",
    shortTitle: "Evidence synthesis",
    tagline: "Evidence, synthesised rigorously — and faster.",
    summary:
      "Systematic and scoping reviews with LLM-assisted workflows, consensus methods (Delphi, nominal group) and methodological support for clinical practice guidelines.",
    seoDescription:
      "Systematic and scoping reviews with LLM-assisted workflows, Delphi and consensus studies, and methodological support for clinical practice guidelines (GRADE).",
    intro: [
      "Decisions in healthcare should rest on the best available evidence, synthesised transparently. We support scientific societies, hospitals and guideline panels through the whole evidence-to-recommendation pathway: from a well-formed question, to a review that follows the standards, to recommendations reached through a structured consensus process.",
      "We also invest heavily in making this work faster without making it weaker. Large language models now take on the repetitive parts of a review — deduplication, screening triage, extraction drafts — while a human remains accountable for every decision, and every automated step is validated and documented.",
    ],
    services: [
      {
        title: "Systematic reviews and meta-analysis",
        description:
          "Full-service or targeted support for reviews that follow Cochrane, JBI and PRISMA 2020 standards.",
        items: [
          "Question framing (PICO / PECO / PIRD), protocol writing and PROSPERO registration",
          "Search-strategy design with information-specialist peer review (PRESS), across databases and grey literature",
          "Dual screening, data extraction and risk-of-bias assessment (RoB 2, ROBINS-I, QUADAS-2, PROBAST)",
          "Pairwise and network meta-analysis, meta-regression, diagnostic test accuracy meta-analysis",
          "Certainty of evidence with GRADE and Summary-of-Findings tables",
          "PRISMA 2020 reporting, manuscript drafting and responses to reviewers",
        ],
      },
      {
        title: "Scoping, rapid, umbrella and living reviews",
        description:
          "The right review type for the question and the timeline — mapped to JBI and PRISMA extensions.",
        items: [
          "Scoping reviews (JBI methodology, PRISMA-ScR) to map a field or inform a guideline's scope",
          "Rapid reviews with explicit, documented shortcuts for time-critical decisions",
          "Umbrella reviews and overviews of reviews",
          "Living reviews with a maintenance plan and an update schedule",
        ],
      },
      {
        title: "LLM-assisted review workflows",
        description:
          "We use large language models to remove drudgery from evidence synthesis — always with a human in the loop, an audit trail and a validation step against human double-screening.",
        items: [
          "Deduplication and record cleaning across database exports",
          "Title/abstract screening triage and prioritisation, calibrated on a human-screened sample",
          "Draft data extraction into structured forms, reviewed and corrected by the team",
          "Assistance with risk-of-bias signalling questions and with GRADE summaries",
          "Transparent reporting of what was automated, how it was validated and what the error rates were",
          "Reusable pipelines that your team can run on the next review",
        ],
      },
      {
        title: "Consensus-based recommendations",
        description:
          "When the evidence is thin or heterogeneous, structured expert consensus fills the gap — if it is run properly.",
        items: [
          "Delphi studies: design, item development, survey platform, rounds, analysis of agreement and stability, reporting to ACCORD / CREDES guidance",
          "Nominal group technique and RAND/UCLA appropriateness method, including panel facilitation",
          "Consensus statements and position papers for scientific societies",
          "Statistical analysis of agreement and feedback reports between rounds",
        ],
      },
      {
        title: "Clinical practice guidelines",
        description:
          "Methodological backbone for guideline panels, from scoping to publication, aligned with international and national standards.",
        items: [
          "Guideline scoping and prioritisation of clinical questions",
          "Evidence reviews and Evidence-to-Decision (EtD) frameworks per question",
          "GRADE methodology training and facilitation of panel meetings",
          "Management of conflicts of interest and panel composition, in line with AGREE II and the Italian SNLG / ISS methodological manual",
          "Reporting to RIGHT, AGREE II self-assessment, support for submission to national guideline systems",
          "Adaptation of existing guidelines (GRADE-ADOLOPMENT) and update plans",
        ],
      },
    ],
    audiences: [
      "Scientific societies and professional associations developing guidelines or consensus documents",
      "Hospital and regional guideline committees",
      "HTA and health-policy bodies",
      "Academic groups publishing systematic reviews",
      "Medical-affairs teams in pharmaceutical and device companies",
    ],
    faqs: [
      {
        question: "Is using an LLM in a systematic review acceptable to journals?",
        answer:
          "Increasingly yes, provided the use is disclosed and validated. We follow the emerging guidance (for example Cochrane's and the RAISE recommendations), report what the model did and how it was checked, and keep human reviewers responsible for inclusion decisions and extracted data.",
      },
      {
        question: "Can you work with our own panel and authors?",
        answer:
          "That is the usual arrangement. We provide the method, the tools and the synthesis; your clinicians provide the expertise and the judgement. We are explicit about roles from the start.",
      },
      {
        question: "Do you run Delphi studies end to end?",
        answer:
          "Yes — from item generation to the final report — or we can support just the parts you need, such as the analysis between rounds.",
      },
    ],
    cta: {
      heading: "Planning a review, a consensus or a guideline?",
      body: "Share the clinical question and the context. We will tell you which review type fits, how long it takes and where automation can safely speed it up.",
      buttonLabel: "Talk to us about evidence",
      mailSubject: "Evidence synthesis — review / consensus / guideline",
    },
  },

  // ---------------------------------------------------------------------------
  // 3. Research & tools
  // ---------------------------------------------------------------------------
  {
    slug: "research",
    eyebrow: "03 — Research & tools",
    title: "Research and tools",
    shortTitle: "Research & tools",
    tagline: "We build what we wish existed.",
    summary:
      "Our own methodological research, open-source tools for clinical research teams, and custom automation built for a client's specific workflow.",
    seoDescription:
      "Methodological research and open-source tools for clinical research, plus custom automation of research workflows built for client teams.",
    intro: [
      "Consulting tells us where research teams lose time and where methods fall short. We turn those observations into research questions and into software. Some of it is published as open source; some is built for a single client and handed over with its documentation.",
      "This is also where we test ideas before we use them for clients — in particular how far large language models can be trusted in evidence synthesis, and how to measure that.",
    ],
    services: [
      {
        title: "Methodological research",
        description:
          "Internal research projects, often in collaboration with academic partners, on questions that come directly from practice.",
        items: [
          "Validation of LLM-assisted screening and extraction against human reviewers, and the reporting standards that should accompany them",
          "Simulation studies on study-design choices and analysis methods",
          "Real-world evidence methods: target-trial emulation, data-quality frameworks for registries",
          "Methods for harmonising and pooling heterogeneous clinical datasets",
        ],
      },
      {
        title: "Open-source tools",
        description:
          "Small, focused applications we maintain publicly on GitHub. Each one solves one problem well and can be used without an account or a server.",
        items: [
          "Protocol-feasibility simulation on synthetic cohorts",
          "AI-assisted harmonisation of research datasets with a reviewer in charge",
          "Workspaces for research-data discovery and access applications",
          "More below — every project links to its repository and documentation",
        ],
      },
      {
        title: "Custom automation for your team",
        description:
          "When a repetitive task is eating your team's time, we build the tool that removes it — scoped to your workflow, delivered with code, tests and a handover.",
        items: [
          "Screening and extraction pipelines for evidence-synthesis groups",
          "Automated data-validation and quality reports for registries and trials",
          "Reproducible report generation: tables, figures and documents regenerated from data",
          "Dashboards for study monitoring, recruitment and data completeness",
          "Lightweight internal tools: intake forms, trackers, document generators",
          "Integration with the platforms you already use (REDCap, spreadsheets, reference managers, cloud storage)",
        ],
      },
    ],
    audiences: [
      "Research units that run the same process many times a year",
      "Evidence-synthesis groups and guideline teams",
      "Registry owners and data managers",
      "Academic partners interested in joint methodological projects",
    ],
    process: [
      {
        title: "Map the workflow",
        description:
          "We sit with the people who do the task, document the steps and identify where time is actually lost.",
      },
      {
        title: "Prototype fast",
        description:
          "A working prototype on real (or synthetic) data within weeks, so you can judge the value before committing further.",
      },
      {
        title: "Harden and hand over",
        description:
          "Tests, documentation, deployment where you want it, and a session with your team. You own the code.",
      },
    ],
    faqs: [
      {
        question: "Who owns the tools you build for us?",
        answer:
          "You do. Client-specific tools are delivered with full source code and documentation; we agree licensing terms in the proposal. Where a generic component emerges we may — with your agreement — release it as open source.",
      },
      {
        question: "Do you work with real patient data?",
        answer:
          "Only within a data-processing agreement and the client's infrastructure. Our public tools run entirely in the browser and ship with synthetic data precisely so they can be tried safely.",
      },
    ],
    cta: {
      heading: "Have a task that should be automated — or an idea to research together?",
      body: "Describe the workflow or the question. We will tell you whether it is a two-week tool, a research project, or something that already exists.",
      buttonLabel: "Propose a project",
      mailSubject: "Research & tools — automation / collaboration",
    },
  },
];

export function getPillar(slug: string): Pillar {
  const pillar = pillars.find((p) => p.slug === slug);
  if (!pillar) throw new Error(`Unknown pillar: ${slug}`);
  return pillar;
}
