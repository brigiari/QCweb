import { home } from "@/content/home";
import { projects, projectStatusLabel } from "@/content/projects";
import type { Project } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { LineButton } from "@/components/ui/LineButton";
import { Eyebrow, SerifHeading, SideNote } from "@/components/ui/Text";

/** "What we are building": lavender project cards linking to GitHub. */
export function ProjectsSection({
  eyebrow = home.building.eyebrow,
  title = home.building.title,
  note = home.building.note,
  items = projects,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  note?: string;
  items?: Project[];
  className?: string;
}) {
  return (
    <Container as="section" className={`pt-[155px] max-lg:pt-20 ${className}`} id="projects">
      <div className="flex items-end justify-between gap-10 max-lg:flex-col max-lg:items-start">
        <div>
          <Eyebrow size={26} className="max-sm:text-[18px]">
            {eyebrow}
          </Eyebrow>
          <SerifHeading text={title} size={80} className="mt-[25px]" />
        </div>
        <SideNote className="mb-[3px] mr-[150px] max-xl:mr-0">{note}</SideNote>
      </div>
      <ul className="mt-[50px] grid grid-cols-3 gap-[18px] max-lg:grid-cols-1">
        {items.map((p) => (
          <li key={p.slug}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </Container>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="relative flex min-h-[626px] flex-col bg-lavender p-[32px] pb-[35px] pt-[42px] text-ink max-sm:min-h-0">
      <span className="absolute right-[19px] top-[17px] rounded-pill bg-cream/50 px-[12px] text-[15px] font-bold leading-[29px]">
        {projectStatusLabel[p.status]}
      </span>
      <h3 className="pr-[90px] text-[45px] font-bold leading-none tracking-[-0.01em] text-cream max-sm:text-[34px]">
        {p.name}
      </h3>
      <p className="mt-[8px] max-w-[330px] text-[26px] font-bold leading-[33px] max-sm:text-[22px] max-sm:leading-[28px]">
        {p.tagline}
      </p>
      <p className="mt-[70px] text-[20px] leading-[24px] max-sm:mt-8">{p.description}</p>
      <ul className="mt-[50px] flex flex-wrap gap-x-[6px] gap-y-[7px]">
        {p.tags.map((t) => (
          <li
            key={t}
            className="rounded-pill bg-purple px-[12px] text-[15px] font-bold leading-[29px] text-cream"
          >
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-[18px]">
        <LineButton href={p.repoUrl}>{home.building.buttonLabel}</LineButton>
      </div>
    </article>
  );
}
