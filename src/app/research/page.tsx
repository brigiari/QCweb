import type { Metadata } from "next";
import { getPillar } from "@/content/pillars";
import { PillarPage } from "@/components/PillarPage";
import { ProjectCards } from "@/components/sections/ProjectCards";

const pillar = getPillar("research");

export const metadata: Metadata = {
  title: pillar.title,
  description: pillar.seoDescription,
};

/**
 * Research & tools: the standard pillar page plus the project list, each
 * project linking to its GitHub repository.
 */
export default function Page() {
  return (
    <PillarPage pillar={pillar}>
      <div className="border-t border-border bg-surface">
        <ProjectCards
          eyebrow="Projects"
          title="Current projects"
          lede="Every project links to its public repository. Status reflects where the work stands today; prototypes are design explorations, not products."
        />
      </div>
    </PillarPage>
  );
}
