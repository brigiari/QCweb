import { Container } from "@/components/ui/Container";
import { LineButton } from "@/components/ui/LineButton";
import { SerifHeading } from "@/components/ui/Text";

/** Purple full-width band with a centred serif heading, a line and a 268px button. */
export function CtaBand({
  heading,
  body,
  buttonLabel,
  href,
  className = "",
}: {
  heading: string;
  body: string;
  buttonLabel: string;
  href: string;
  className?: string;
}) {
  return (
    <section className={`bg-purple text-cream ${className}`}>
      <Container className="flex flex-col items-center pb-[58px] pt-[57px] text-center">
        <SerifHeading text={heading} size={60} />
        <p className="mt-[32px] max-w-[560px] text-[20px] leading-[25px]">{body}</p>
        <div className="mt-[84px] w-[268px] max-w-full">
          <LineButton href={href}>{buttonLabel}</LineButton>
        </div>
      </Container>
    </section>
  );
}
