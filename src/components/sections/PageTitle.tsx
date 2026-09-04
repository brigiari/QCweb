import { Container } from "@/components/ui/Container";
import { SerifHeading } from "@/components/ui/Text";

/** Centred page title + lede used by About, Contacts, FAQ, Privacy, Legal. */
export function PageTitle({ title, lede }: { title: string; lede?: string }) {
  return (
    <Container as="section" className="pt-[224px] text-center max-lg:pt-20 max-sm:pt-12">
      <SerifHeading as="h1" text={title} size={80} />
      {lede && (
        <p className="mx-auto mt-[44px] max-w-[760px] text-[30px] leading-[37px] max-sm:mt-6 max-sm:text-[20px] max-sm:leading-[27px]">
          {lede.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br className="hidden sm:inline" />}
              {i < arr.length - 1 && <span className="sm:hidden"> </span>}
            </span>
          ))}
        </p>
      )}
    </Container>
  );
}
