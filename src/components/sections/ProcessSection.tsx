import type { ProcessStep } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { Eyebrow, SerifHeading, SideNote } from "@/components/ui/Text";

const tones = ["bg-lavender", "bg-sand", "bg-sand", "bg-lavender"];

/** "How an engagement works": 2 × 2 numbered blocks, edge to edge. */
export function ProcessSection({
  steps,
  eyebrow = "Process",
  title = "How an engagement\nworks",
  note = "Four steps, the same for every engagement. The first one is free and commits you to nothing.",
}: {
  steps: ProcessStep[];
  eyebrow?: string;
  title?: string;
  note?: string;
}) {
  return (
    <section className="pt-[227px] max-lg:pt-20">
      <Container className="flex items-center justify-between gap-10 max-lg:flex-col max-lg:items-start">
        <div>
          <Eyebrow size={18}>{eyebrow}</Eyebrow>
          <SerifHeading text={title} size={60} className="mt-[10px]" />
        </div>
        <SideNote className="mr-[170px] max-xl:mr-0">{note}</SideNote>
      </Container>
      <ol className="mt-[108px] grid grid-cols-2 max-lg:mt-12 max-md:grid-cols-1">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className={`grid min-h-[386px] grid-cols-[395px_1fr] pb-[40px] pt-[24px] text-ink max-lg:grid-cols-1 max-lg:gap-6 max-lg:px-8 max-lg:py-10 max-sm:px-5 ${tones[i % tones.length]}`}
          >
            <div className="pl-[62px] max-lg:pl-0">
              <span className="block text-[100px] font-bold leading-none text-purple max-sm:text-[64px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-[4px] max-w-[300px] text-[45px] font-bold leading-none text-cream max-sm:text-[32px]">
                {step.title}
              </h3>
            </div>
            <p className="max-w-[330px] pr-gutter pt-[167px] text-[20px] leading-[25px] max-lg:max-w-none max-lg:pr-0 max-lg:pt-0">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
