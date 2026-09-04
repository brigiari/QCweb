import { home } from "@/content/home";
import { HomeHero } from "@/components/sections/HomeHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { mailto } from "@/lib/mailto";

/** Home page: the sequence of sections from the designer's HOME mockup. */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServicesSection />
      <PrinciplesSection
        eyebrow={home.principles.eyebrow}
        title={home.principles.title}
        band
        className="mt-[148px] max-lg:mt-20"
      />
      <ProjectsSection />
      <CtaBand
        heading={home.cta.heading}
        body={home.cta.body}
        buttonLabel={home.cta.buttonLabel}
        href={mailto(home.cta.mailSubject)}
        className="mt-[159px] max-lg:mt-20"
      />
    </>
  );
}
