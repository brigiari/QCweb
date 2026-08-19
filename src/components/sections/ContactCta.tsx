import type { Cta } from "@/content/types";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { mailto } from "@/lib/mailto";

const defaultCta: Cta = {
  heading: "Let's talk about your project",
  body: "A short call is usually enough to tell whether and how we can help. No commitment, no sales pitch.",
  buttonLabel: "Get in touch",
  mailSubject: "Enquiry",
};

/** Closing call-to-action block. Accepts a pillar-specific CTA or uses the default. */
export function ContactCta({ cta = defaultCta }: { cta?: Cta }) {
  return (
    <section>
      <Container className="py-20 sm:py-24">
        <div className="rounded-lg bg-brand-800 px-8 py-12 text-white sm:px-12 sm:py-16">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
            {cta.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-100">
            {cta.body}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              href={mailto(cta.mailSubject)}
              className="bg-white text-brand-800 hover:bg-brand-50"
            >
              {cta.buttonLabel}
            </Button>
            <a
              href={mailto(cta.mailSubject)}
              className="text-sm text-brand-100 underline-offset-4 hover:underline"
            >
              {site.contactEmail}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
