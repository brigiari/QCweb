import type { Metadata } from "next";
import { about } from "@/content/about";
import { generalFaqs } from "@/content/faq";
import { AboutTiles } from "@/components/sections/AboutTiles";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageTitle } from "@/components/sections/PageTitle";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";

export const metadata: Metadata = {
  title: "About",
  description: about.lede,
};

export default function AboutPage() {
  return (
    <>
      <PageTitle title={about.title} lede={about.lede} />
      <AboutTiles />
      <PrinciplesSection
        eyebrow={about.principles.eyebrow}
        title={about.principles.title}
        className="mt-[87px] max-lg:mt-8"
      />
      <FaqSection groups={[{ items: generalFaqs }]} className="mt-[40px]" />
    </>
  );
}
