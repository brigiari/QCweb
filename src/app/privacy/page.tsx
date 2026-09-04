import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageTitle } from "@/components/sections/PageTitle";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy notice for the ${site.name} website.`,
  robots: { index: false },
};

/**
 * Minimal privacy notice for a static site with no cookies, no analytics and
 * no forms. Revisit before adding analytics, a contact form, embedded media or
 * any third-party script.
 */
export default function PrivacyPage() {
  const sections: [string, string][] = [
    ["Data controller", `${site.legalName}, ${site.legal.registeredOffice} — ${site.contactEmail}.`],
    [
      "This website",
      "This site is a static set of pages. It does not use cookies, does not run analytics or tracking scripts, and does not embed third-party content. Web fonts are served from Google Fonts at build time and bundled with the site; no request is made to Google when you visit. The hosting provider may keep standard server logs (IP address, time, requested page) for security purposes for a limited period.",
    ],
    [
      "Contacting us",
      "The only way to send us data through this site is by e-mail. When you write to us we process the data you choose to include (name, e-mail address, the content of your message) to answer you and, where applicable, to prepare a proposal. The legal basis is our legitimate interest in responding to enquiries and, where a contract follows, its performance. Messages are kept for as long as needed to handle the enquiry and any resulting engagement, then deleted or archived in line with legal obligations.",
    ],
    [
      "Your rights",
      `You may request access, rectification, erasure, restriction or portability of your personal data, and object to processing, by writing to ${site.contactEmail}. You may also lodge a complaint with the Italian supervisory authority (Garante per la protezione dei dati personali).`,
    ],
    [
      "Client projects",
      "Personal and health data processed in the course of consulting engagements are governed by the data-processing agreement signed with each client, not by this notice.",
    ],
  ];
  return (
    <>
      <PageTitle title="Privacy notice" />
      <Container className="mx-auto mt-[120px] max-w-[899px] pb-[160px] max-lg:mt-16 max-lg:pb-20">
        <dl className="space-y-[40px]">
          {sections.map(([title, body]) => (
            <div key={title}>
              <dt className="text-[26px] font-bold leading-[33px]">{title}</dt>
              <dd className="mt-[10px] text-[20px] leading-[24px]">{body}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-[60px] text-[15px] leading-[23px]">Last updated: September 2026.</p>
      </Container>
    </>
  );
}
