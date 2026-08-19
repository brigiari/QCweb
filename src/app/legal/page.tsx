import type { Metadata } from "next";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
    <section>
      <Container className="py-16 sm:py-20">
        <SectionHeading as="h1" eyebrow="Legal" title="Legal notice" />
        <dl className="mt-10 max-w-2xl divide-y divide-border rounded-lg border border-border">
          {rows.map(([k, v]) => (
            <div key={k} className="grid gap-1 px-5 py-4 sm:grid-cols-3">
              <dt className="text-sm font-medium text-fg-muted">{k}</dt>
              <dd className="text-sm sm:col-span-2">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-fg-muted">
          The content of this website is provided for general information about
          our services and does not constitute medical, statistical or legal
          advice for any specific case. Open-source projects linked from this
          site are governed by the licences in their respective repositories.
        </p>
      </Container>
    </section>
  );
}
