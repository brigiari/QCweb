import type { Pillar } from "@/content/types";
import { home } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Eyebrow, SerifHeading } from "@/components/ui/Text";
import { PillarCard } from "./PillarCard";

/** "Are you looking for something else?" — the other two service areas. */
export function OtherServices({ pillars }: { pillars: Pillar[] }) {
  return (
    <Container as="section" className="grid grid-cols-[491px_1fr] gap-x-[0] pt-[200px] max-lg:grid-cols-1 max-lg:gap-y-10 max-lg:pt-20">
      <div>
        <Eyebrow size={18}>Services</Eyebrow>
        <SerifHeading text={"Are you\nlooking for\nsomething else?"} size={60} className="mt-[10px]" />
        <p className="mt-[52px] text-[26px] leading-none max-sm:text-[20px]">Discover what else we offer.</p>
      </div>
      <div className="grid grid-cols-2 gap-[17px] max-md:grid-cols-1">
        {pillars.map((p) => (
          <PillarCard key={p.slug} pillar={p} buttonLabel={home.services.buttonLabel} />
        ))}
      </div>
    </Container>
  );
}
