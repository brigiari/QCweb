import type { ReactNode } from "react";
import type { Pillar } from "@/content/types";
import { pillars } from "@/content/pillars";
import { site } from "@/content/site";
import { ApproachTeam } from "@/components/sections/ApproachTeam";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { OtherServices } from "@/components/sections/OtherServices";
import { PillarHero } from "@/components/sections/PillarHero";
import { ProcessSection } from "@/components/sections/ProcessSection";

/**
 * Service page, in the order of the designer's SERVICE mockup:
 * hero → approach/team → what we offer → (extra) → process → typical clients
 * → FAQ → the other two services.
 */
export function PillarPage({ pillar, children }: { pillar: Pillar; children?: ReactNode }) {
  const others = pillars.filter((p) => p.slug !== pillar.slug);
  return (
    <>
      <PillarHero pillar={pillar} />
      <ApproachTeam pillar={pillar} />
      <OfferSection eyebrow="Services" title="What we offer" groups={pillar.services} />
      {children}
      <ProcessSection steps={pillar.process ?? site.process} />
      <ClientsSection audiences={pillar.audiences} />
      {pillar.faqs && pillar.faqs.length > 0 && (
        <FaqSection groups={[{ items: pillar.faqs }]} className="mt-[0px]" />
      )}
      <OtherServices pillars={others} />
      <div className="h-[154px] max-lg:h-20" />
    </>
  );
}
