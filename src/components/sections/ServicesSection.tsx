import { home } from "@/content/home";
import { pillars } from "@/content/pillars";
import { Container } from "@/components/ui/Container";
import { Eyebrow, SerifHeading } from "@/components/ui/Text";
import { PillarCard } from "./PillarCard";

/** Home: "What we do — Our services" with the three pillar cards. */
export function ServicesSection() {
  return (
    <Container as="section" className="pt-[132px] max-lg:pt-20" id="what-we-do">
      <Eyebrow size={26} className="max-sm:text-[18px]">
        {home.services.eyebrow}
      </Eyebrow>
      <SerifHeading text={home.services.title} size={80} className="mt-[21px]" />
      <div className="mt-[36px] grid grid-cols-3 gap-[18px] max-lg:grid-cols-1">
        {pillars.map((p) => (
          <PillarCard key={p.slug} pillar={p} buttonLabel={home.services.buttonLabel} />
        ))}
      </div>
    </Container>
  );
}
