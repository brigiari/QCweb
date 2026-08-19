import Link from "next/link";
import { pillars } from "@/content/pillars";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** The three service areas as cards, linking to their pages. */
export function PillarGrid() {
  return (
    <section id="what-we-do" className="scroll-mt-20">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="What we do"
          title="Three ways we support clinical research"
          lede="Each area stands on its own; most engagements combine two of them."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pillars.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}/`}
              className="group flex flex-col rounded-lg border border-border bg-bg p-7 transition-all hover:-translate-y-0.5 hover:border-fg-subtle hover:shadow-md"
            >
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
                {p.eyebrow}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm font-medium text-fg">{p.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
                {p.summary}
              </p>
              <ul className="mt-5 space-y-1.5 border-t border-border pt-5 text-sm text-fg-muted">
                {p.services.slice(0, 4).map((s) => (
                  <li key={s.title} className="flex gap-2">
                    <span aria-hidden="true" className="text-accent">
                      ·
                    </span>
                    {s.title}
                  </li>
                ))}
              </ul>
              <span className="mt-6 text-sm font-medium text-accent group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
