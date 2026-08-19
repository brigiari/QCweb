import { Hero } from "@/components/sections/Hero";
import { PillarGrid } from "@/components/sections/PillarGrid";
import { PrinciplesGrid } from "@/components/sections/PrinciplesGrid";
import { ProjectCards } from "@/components/sections/ProjectCards";
import { ContactCta } from "@/components/sections/ContactCta";

/**
 * Home page = a sequence of sections. When the designer's home mockup arrives,
 * this is the composition to rebuild: swap sections in/out, keep the content.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <PillarGrid />
      <PrinciplesGrid />
      <ProjectCards
        eyebrow="Research & tools"
        title="What we are building"
        lede="Open-source tools for clinical-research teams, born from our own work. See the Research section for the full programme."
      />
      <ContactCta />
    </>
  );
}
