import { projects, projectStatusLabel } from "@/content/projects";
import type { Project } from "@/content/types";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Research & tools project list. Each card links to the GitHub repository
 * (and to a live demo / docs when available).
 */
export function ProjectCards({
  items = projects,
  eyebrow = "Open source",
  title = "Tools we maintain in the open",
  lede,
  id = "projects",
}: {
  items?: Project[];
  eyebrow?: string;
  title?: string;
  lede?: string;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <Container className="py-20 sm:py-24">
        <SectionHeading eyebrow={eyebrow} title={title} lede={lede} />
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <li
              key={p.slug}
              className="flex flex-col rounded-lg border border-border bg-bg p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <Badge tone={p.status === "active" ? "accent" : "neutral"}>
                  {projectStatusLabel[p.status]}
                </Badge>
              </div>
              <p className="mt-2 text-sm font-medium">{p.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted">
                {p.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <li key={t}>
                    <Badge>{t}</Badge>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4 text-sm font-medium">
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  GitHub repository ↗
                </a>
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Live demo ↗
                  </a>
                )}
                {p.docsUrl && (
                  <a
                    href={p.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Docs ↗
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
