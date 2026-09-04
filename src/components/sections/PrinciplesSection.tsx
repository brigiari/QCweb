import { principles } from "@/content/principles";
import { Container } from "@/components/ui/Container";
import { Eyebrow, SerifHeading } from "@/components/ui/Text";

/**
 * "Principles we do not negotiate on": title on the left, a ruled list on the
 * right. Home renders it as a sand band with cream rules; About renders it on
 * the page background with purple rules.
 */
export function PrinciplesSection({
  eyebrow,
  title,
  band = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  band?: boolean;
  className?: string;
}) {
  const rule = band ? "border-cream" : "border-purple";
  return (
    <section className={`${band ? "bg-sand" : ""} ${className}`}>
      <Container className="grid grid-cols-[603px_1fr] pb-[60px] pt-[90px] max-lg:grid-cols-1 max-lg:gap-10 max-lg:py-16">
        <div>
          <Eyebrow size={18}>{eyebrow}</Eyebrow>
          <SerifHeading text={title} size={60} className="mt-[10px]" />
        </div>
        <dl className={`border-t-[8px] ${rule}`}>
          {principles.map((p) => (
            <div
              key={p.title}
              className={`grid grid-cols-[442px_1fr] border-b-[8px] pb-[24px] pt-[18px] last:border-b-0 max-md:grid-cols-1 max-md:gap-2 ${rule}`}
            >
              <dt className="pr-6 text-[26px] font-bold leading-[33px] max-sm:text-[22px] max-sm:leading-[28px]">
                {p.title}
              </dt>
              <dd className="text-[18px] leading-[22px]">{p.description}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
