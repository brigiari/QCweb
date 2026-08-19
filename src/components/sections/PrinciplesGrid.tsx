import { principles } from "@/content/principles";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PrinciplesGrid() {
  return (
    <section className="border-y border-border bg-surface">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="How we work"
          title="Principles we do not negotiate on"
        />
        <dl className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title}>
              <dt className="text-base font-semibold">{p.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-fg-muted">
                {p.description}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
