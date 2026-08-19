import type { Project } from "./types";

/**
 * Research & tooling projects shown in the Research section.
 *
 * Add a project by appending an object; the page and sitemap update
 * automatically. `liveUrl` is optional — add it when a project is deployed.
 * Keep internal / private tools out of this list.
 */
export const projects: Project[] = [
  {
    slug: "trialscope",
    name: "TrialScope",
    tagline: "A protocol-feasibility simulator for clinical-research teams.",
    description:
      "Apply a study's eligibility criteria to a synthetic cohort one criterion at a time and see exactly where the candidate population goes — before recruitment begins. Built to show why criterion-by-criterion reasoning misleads, and to make feasibility discussions concrete.",
    repoUrl: "https://github.com/brigiari/TrialScope",
    status: "active",
    tags: ["feasibility", "trial design", "simulation", "synthetic data"],
    since: 2025,
  },
  {
    slug: "harmonizerx",
    name: "HarmonizeRx",
    tagline: "AI-assisted harmonisation of research datasets — with the reviewer in charge.",
    description:
      "Compares two research datasets, profiles every column, proposes variable mappings with the evidence behind each one, surfaces the conflicts that would corrupt a pooled analysis, and produces a harmonisation plan with an append-only record of every decision. Runs entirely in the browser.",
    repoUrl: "https://github.com/brigiari/HarmonizeRx",
    status: "active",
    tags: ["data harmonisation", "FAIR", "pooled analysis", "LLM-assisted"],
    since: 2025,
  },
  {
    slug: "datapermit-eu",
    name: "DataPermit EU",
    tagline: "A research-data discovery and access-application workspace, inspired by the European Health Data Space.",
    description:
      "A design prototype exploring how a researcher could discover secondary-use health datasets, assess their fit, and prepare a data-access application — with the requirements of each access body made explicit. Independent and fictional: not affiliated with the EHDS or any data-access body.",
    repoUrl: "https://github.com/brigiari/DataPermitEU",
    status: "prototype",
    tags: ["secondary use", "EHDS", "data access", "prototype"],
    since: 2026,
  },
];

export const projectStatusLabel: Record<Project["status"], string> = {
  active: "Active",
  prototype: "Prototype",
  planned: "Planned",
  archived: "Archived",
};
