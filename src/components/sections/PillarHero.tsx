import type { Pillar } from "@/content/types";
import { ArrowDown } from "@/components/brand/icons";
import { SerifHeading } from "@/components/ui/Text";

/** Full-bleed gradient hero of a service page: centred serif title + tagline. */
export function PillarHero({ pillar }: { pillar: Pillar }) {
  return (
    <section
      className="relative flex min-h-[884px] flex-col items-center justify-center bg-purple bg-cover bg-center px-gutter text-center text-cream max-lg:min-h-[560px] max-sm:min-h-[440px]"
      style={{ backgroundImage: "url(/images/gradient-purple-wide.jpg)" }}
    >
      <SerifHeading as="h1" text={pillar.title} size={80} />
      <p className="mt-[40px] text-[30px] leading-[37px] max-sm:text-[20px] max-sm:leading-[26px]">
        {pillar.tagline}
      </p>
      <a
        href="#approach"
        aria-label="Scroll to content"
        className="absolute bottom-[36px] left-1/2 -translate-x-1/2 text-cream transition-opacity hover:opacity-70"
      >
        <ArrowDown className="h-[28px] w-[29px]" />
      </a>
    </section>
  );
}
