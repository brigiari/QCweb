import type { Metadata } from "next";
import { getPillar } from "@/content/pillars";
import { PillarPage } from "@/components/PillarPage";

const pillar = getPillar("clinical-research");

export const metadata: Metadata = {
  title: pillar.title,
  description: pillar.seoDescription,
};

export default function Page() {
  return <PillarPage pillar={pillar} />;
}
