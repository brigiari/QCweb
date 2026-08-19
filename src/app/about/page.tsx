import type { Metadata } from "next";
import { about } from "@/content/about";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrinciplesGrid } from "@/components/sections/PrinciplesGrid";
import { ContactCta } from "@/components/sections/ContactCta";

export const metadata: Metadata = {
  title: "About",
  description: about.tagline,
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow="About"
            title={about.title}
            lede={about.tagline}
          />
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="space-y-5 text-base leading-relaxed text-fg-muted lg:col-span-7">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <h2 className="pt-4 text-xl font-semibold text-fg">
                {about.collaborationHeading}
              </h2>
              <p>{about.collaboration}</p>
            </div>

            <aside className="lg:col-span-5">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                Team
              </h2>
              <ul className="mt-4 space-y-6">
                {about.team.map((member) => (
                  <li
                    key={member.name}
                    className="rounded-lg border border-border bg-bg p-6"
                  >
                    <p className="text-lg font-semibold">{member.name}</p>
                    <p className="mt-1 text-sm text-accent">{member.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                      {member.bio}
                    </p>
                    {member.links.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
                        {member.links.map((l) => (
                          <li key={l.href}>
                            <a
                              href={l.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent hover:underline"
                            >
                              {l.label} ↗
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      <PrinciplesGrid />
      <ContactCta />
    </>
  );
}
