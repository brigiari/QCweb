import { contact } from "@/content/contact";
import { pillars } from "@/content/pillars";
import { site } from "@/content/site";
import type { ContactEntry, Pillar } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { LineButton } from "@/components/ui/LineButton";
import { Eyebrow, SerifHeading, SideNote, toneClass } from "@/components/ui/Text";
import { mailto } from "@/lib/mailto";

/** Two ruled tables: mailboxes (purple rules) and social links (sand rules). */
export function ContactTables() {
  return (
    <Container as="section" className="mt-[126px] grid grid-cols-[813px_1fr] gap-x-[95px] max-xl:grid-cols-1 max-xl:gap-y-16 max-lg:mt-16">
      <Table rows={site.contacts} rule="border-purple" underline />
      <Table rows={site.social} rule="border-sand" />
    </Container>
  );
}

function Table({ rows, rule, underline = false }: { rows: ContactEntry[]; rule: string; underline?: boolean }) {
  return (
    <dl className={`border-t-[8px] ${rule}`}>
      {rows.map((r) => (
        <div
          key={r.label}
          className={`flex items-baseline justify-between gap-6 border-b-[8px] pb-[16px] pt-[19px] text-[26px] leading-none max-sm:flex-col max-sm:gap-2 max-sm:text-[20px] ${rule}`}
        >
          <dt className="font-bold">{r.label}</dt>
          <dd>
            {r.href ? (
              <a
                href={r.href}
                className={`hover:opacity-70 ${underline ? "underline underline-offset-[6px]" : ""}`}
                {...(r.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {r.value}
              </a>
            ) : (
              r.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** "You don't know from where to start?" + one card per service area. */
export function StartSection() {
  return (
    <Container as="section" className="mt-[240px] max-lg:mt-20">
      <div className="flex items-center justify-between gap-10 max-lg:flex-col max-lg:items-start">
        <SerifHeading text={contact.start.title} size={60} />
        <SideNote className="mr-[170px] max-xl:mr-0">{contact.start.note}</SideNote>
      </div>
      <ul className="mt-[106px] grid grid-cols-3 gap-[18px] max-lg:mt-12 max-lg:grid-cols-1">
        {pillars.map((p) => (
          <li key={p.slug}>
            <ContactCard pillar={p} />
          </li>
        ))}
      </ul>
    </Container>
  );
}

function ContactCard({ pillar }: { pillar: Pillar }) {
  return (
    <article className={`flex min-h-[470px] flex-col p-[30px] pb-[41px] pt-[40px] max-sm:min-h-0 ${toneClass[pillar.tone]}`}>
      <Eyebrow size={15}>{pillar.eyebrow}</Eyebrow>
      <h3 className="mt-[22px] min-h-[90px] text-[45px] font-bold leading-none tracking-[-0.01em] text-cream max-sm:min-h-0 max-sm:text-[34px]">
        {pillar.shortTitle === "Research & tools" ? (
          <>
            Research
            <br />
            and tools
          </>
        ) : (
          pillar.shortTitle
        )}
      </h3>
      <p className="mt-[40px] text-[20px] leading-[24px] max-sm:mt-6">{pillar.cta.body}</p>
      <div className="mt-auto pt-[37px]">
        <LineButton href={mailto(pillar.cta.mailSubject)}>{pillar.cta.buttonLabel}</LineButton>
      </div>
    </article>
  );
}
