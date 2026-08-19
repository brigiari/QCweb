import type { ReactNode } from "react";
import type { Pillar } from "@/content/types";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCta } from "@/components/sections/ContactCta";
import { ProcessSteps } from "@/components/sections/ProcessSteps";

/**
 * Renders a full pillar page from its content object:
 * header → services → (extra sections) → audiences → process → FAQ → CTA.
 *
 * `children` lets a route inject pillar-specific sections (the Research page
 * adds the project list) without duplicating the shell.
 */
export function PillarPage({
  pillar,
  children,
}: {
  pillar: Pillar;
  children?: ReactNode;
}) {
  const steps = pillar.process ?? site.process;
  return (
    <>
      {/* Header */}
      <section className="border-b border-border bg-surface">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow={pillar.eyebrow}
            title={pillar.title}
            lede={pillar.tagline}
          />
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-fg-muted">
            {pillar.intro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20">
        <Container className="py-20 sm:py-24">
          <SectionHeading eyebrow="Services" title="What we offer" />
          <div className="mt-12 grid gap-x-12 gap-y-14 lg:grid-cols-2">
            {pillar.services.map((group) => (
              <article key={group.title}>
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {group.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed">
                      <span
                        aria-hidden="true"
                        className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {children}

      {/* Audiences */}
      <section className="border-t border-border">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="Who it's for" title="Typical clients" />
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
              {pillar.audiences.map((a) => (
                <li
                  key={a}
                  className="rounded-md border border-border bg-bg px-4 py-3 text-sm"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <ProcessSteps steps={steps} />

      {/* FAQ */}
      {pillar.faqs && pillar.faqs.length > 0 && (
        <section>
          <Container className="py-20 sm:py-24">
            <SectionHeading eyebrow="FAQ" title="Common questions" />
            <dl className="mt-10 max-w-3xl divide-y divide-border">
              {pillar.faqs.map((f) => (
                <div key={f.question} className="py-6">
                  <dt className="text-base font-semibold">{f.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {f.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      )}

      <ContactCta cta={pillar.cta} />
    </>
  );
}
