import type { Metadata } from "next";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy notice for the ${site.name} website.`,
  robots: { index: false },
};

/**
 * Minimal privacy notice for a static site with no cookies, no analytics and
 * no forms. Revisit this page before adding analytics, a contact form, embedded
 * media or any third-party script — each of those changes what must be
 * disclosed under the GDPR and the Italian Garante's cookie guidelines.
 */
export default function PrivacyPage() {
  return (
    <section>
      <Container className="py-16 sm:py-20">
        <SectionHeading as="h1" eyebrow="Privacy" title="Privacy notice" />
        <div className="prose-custom mt-10 max-w-2xl space-y-5 text-sm leading-relaxed text-fg-muted">
          <p>
            <strong className="text-fg">Data controller.</strong> {site.legalName},{" "}
            {site.legal.registeredOffice} — {site.contactEmail}.
          </p>
          <p>
            <strong className="text-fg">This website.</strong> This site is a
            static set of pages. It does not use cookies, does not run analytics
            or tracking scripts, and does not embed third-party content. The
            hosting provider may keep standard server logs (IP address, time,
            requested page) for security purposes for a limited period.
          </p>
          <p>
            <strong className="text-fg">Contacting us.</strong> The only way to
            send us data through this site is by e-mail. When you write to us we
            process the data you choose to include (name, e-mail address, the
            content of your message) to answer you and, where applicable, to
            prepare a proposal. The legal basis is our legitimate interest in
            responding to enquiries and, where a contract follows, its
            performance. Messages are kept for as long as needed to handle the
            enquiry and any resulting engagement, then deleted or archived in
            line with legal obligations.
          </p>
          <p>
            <strong className="text-fg">Your rights.</strong> You may request
            access, rectification, erasure, restriction or portability of your
            personal data, and object to processing, by writing to{" "}
            {site.contactEmail}. You may also lodge a complaint with the Italian
            supervisory authority (Garante per la protezione dei dati personali).
          </p>
          <p>
            <strong className="text-fg">Client projects.</strong> Personal and
            health data processed in the course of consulting engagements are
            governed by the data-processing agreement signed with each client,
            not by this notice.
          </p>
          <p className="text-xs text-fg-subtle">
            Last updated: August 2026. {/* TODO: keep in sync with changes. */}
          </p>
        </div>
      </Container>
    </section>
  );
}
