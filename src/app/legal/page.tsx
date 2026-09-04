import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageTitle } from "@/components/sections/PageTitle";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Legal notice",
  description: `Company information for ${site.legalName}.`,
  robots: { index: false },
};

/**
 * Company identifiers that Italian law requires on a company website
 * (art. 2250 c.c.; art. 7 D.Lgs. 70/2003). Values come from content/site.ts.
 */
export default function LegalPage() {
  const rows: [string, string][] = [
    ["Company name", site.legalName],
    ["Registered office", site.legal.registeredOffice],
    ["VAT number / Tax code", site.legal.vatNumber],
    ["Business register (REA)", site.legal.reaNumber],
    ["Share capital", site.legal.shareCapital],
    ["Certified e-mail (PEC)", site.legal.pec],
    ["Contact", site.contactEmail],
  ];
  return (
    <>
      <PageTitle title="Legal notice" />
      <Container className="mx-auto mt-[120px] max-w-[899px] pb-[160px] max-lg:mt-16 max-lg:pb-20">
        <dl className="border-t-[8px] border-purple">
          {rows.map(([k, v]) => (
            <div
              key={k}
              className="flex items-baseline justify-between gap-6 border-b-[8px] border-purple pb-[16px] pt-[19px] text-[26px] leading-none max-sm:flex-col max-sm:gap-2 max-sm:text-[18px]"
            >
              <dt className="font-bold">{k}</dt>
              <dd className="text-right max-sm:text-left">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-[48px] text-[20px] leading-[24px]">
          The content of this website is provided for general information about our services
          and does not constitute medical, statistical or legal advice for any specific case.
          Open-source projects linked from this site are governed by the licences in their
          respective repositories.
        </p>
      </Container>
    </>
  );
}
