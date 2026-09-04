import type { Metadata } from "next";
import { getPillar } from "@/content/pillars";
import { PillarPage } from "@/components/PillarPage";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

const pillar = getPillar("research");

export const metadata: Metadata = {
  title: pillar.title.replace("\n", " "),
  description: pillar.seoDescription,
};

/** Research & tools: the standard service page plus the project cards (→ GitHub). */
export default function Page() {
  return (
    <PillarPage pillar={pillar}>
      <ProjectsSection
        eyebrow="Projects"
        title={"Current\nprojects"}
        note="Every project links to its public repository. Status reflects where the work stands today; prototypes are design explorations, not products."
      />
    </PillarPage>
  );
}
