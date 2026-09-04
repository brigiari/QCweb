import { Container } from "@/components/ui/Container";
import { Eyebrow, SerifHeading } from "@/components/ui/Text";

/** "Typical clients": purple band with five icon placeholders and captions. */
export function ClientsSection({
  audiences,
  eyebrow = "Who it is for",
  title = "Typical clients",
}: {
  audiences: string[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="mt-[224px] bg-purple text-cream max-lg:mt-20">
      <Container className="pb-[139px] pt-[87px] text-center max-lg:py-16">
        <Eyebrow size={18}>{eyebrow}</Eyebrow>
        <SerifHeading text={title} size={60} className="mt-[10px]" />
        <ul className="mx-auto mt-[83px] grid grid-cols-5 gap-x-4 gap-y-12 max-lg:grid-cols-3 max-sm:grid-cols-2 max-sm:mt-12">
          {audiences.map((a) => (
            <li key={a} className="flex flex-col items-center">
              {/* Icon placeholder, as in the mockup; replace with real icons when available. */}
              <span aria-hidden="true" className="block size-[113px] rounded-full bg-placeholder max-sm:size-[80px]" />
              <p className="mt-[32px] max-w-[220px] text-[20px] font-medium leading-[25px] max-sm:text-[16px] max-sm:leading-[21px]">
                {a}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
