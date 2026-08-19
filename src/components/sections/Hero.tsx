import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { mailto } from "@/lib/mailto";

/**
 * Home hero. This is the section most likely to be redesigned wholesale when
 * the mockup arrives — keep copy in content/site.ts and treat this file as
 * disposable.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <Container className="py-20 sm:py-28 lg:py-32">
        <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Clinical research consultancy
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
          {site.tagline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
          {site.description}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href={mailto("Discovery call")}>Book a discovery call</Button>
          <Button href="#what-we-do" variant="secondary">
            See what we do
          </Button>
        </div>
      </Container>
    </section>
  );
}
