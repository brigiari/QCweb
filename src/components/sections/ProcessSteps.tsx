import type { ProcessStep } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSteps({
  steps,
  title = "How an engagement works",
  eyebrow = "Process",
}: {
  steps: ProcessStep[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section className="border-y border-border bg-surface">
      <Container className="py-20 sm:py-24">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <span className="font-mono text-sm font-medium text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
