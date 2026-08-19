import type { Metadata } from "next";
import { pillars } from "@/content/pillars";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mailto } from "@/lib/mailto";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} about study design, statistics, evidence synthesis, guidelines or research tooling.`,
};

/**
 * Contact page. V1 is e-mail only (mailto links with pre-filled subjects).
 * A form can be added later via a third-party endpoint (Formspree, Netlify
 * Forms, …) since the site is static.
 */
export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Tell us about your project"
            lede="Write a few lines about the question, the stage you are at and any deadline. We reply within two working days."
          />
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={mailto("Enquiry")}>Email {site.contactEmail}</Button>
            <span className="text-sm text-fg-muted">{site.location}</span>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Shortcuts"
            title="Or start from the area you need"
            lede="Each link opens an e-mail with the subject already filled in."
          />
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {pillars.map((p) => (
              <li
                key={p.slug}
                className="flex flex-col rounded-lg border border-border p-6"
              >
                <h3 className="text-lg font-semibold">{p.shortTitle}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">
                  {p.cta.body}
                </p>
                <Button
                  href={mailto(p.cta.mailSubject)}
                  variant="secondary"
                  className="mt-5 self-start"
                >
                  {p.cta.buttonLabel}
                </Button>
              </li>
            ))}
          </ul>

          <div className="mt-14 max-w-2xl text-sm leading-relaxed text-fg-muted">
            <h2 className="text-base font-semibold text-fg">What helps us reply well</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>The clinical question or the task, in one or two sentences.</li>
              <li>Where the project stands: idea, protocol, data collected, analysis, revision.</li>
              <li>Any hard deadline (grant, ethics submission, journal revision).</li>
              <li>Whether data already exist and, roughly, what they look like.</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
