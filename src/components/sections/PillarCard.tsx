import type { Pillar } from "@/content/types";
import { LineButton } from "@/components/ui/LineButton";
import { Eyebrow, toneClass } from "@/components/ui/Text";

/**
 * Service-area card (home "Our services", "Are you looking for something
 * else?"). 471 × 698 in the mockup: eyebrow, cream title, bold tagline,
 * summary, a translucent inset with the first four service groups, and a
 * line button pinned to the bottom.
 */
export function PillarCard({
  pillar,
  buttonLabel,
}: {
  pillar: Pillar;
  buttonLabel: string;
}) {
  return (
    <article
      className={`flex min-h-[698px] flex-col p-[30px] pb-[32px] pt-[40px] max-sm:min-h-0 ${toneClass[pillar.tone]}`}
    >
      <Eyebrow size={15}>{pillar.eyebrow}</Eyebrow>
      <h3 className="mt-[22px] text-[45px] font-bold leading-none tracking-[-0.01em] text-cream max-sm:text-[34px]">
        {pillar.title.split("\n").map((line, i, arr) => (
          <span key={i}>
            {line}
            {i < arr.length - 1 && <br />}
          </span>
        ))}
      </h3>
      <p className="mt-[8px] max-w-[330px] text-[26px] font-bold leading-[33px] max-sm:text-[22px] max-sm:leading-[28px]">
        {pillar.tagline}
      </p>
      <p className="mt-[70px] text-[20px] leading-[24px] max-sm:mt-8">{pillar.summary}</p>
      <ul className="mt-[31px] rounded-inset bg-cream/50 py-[20px] pl-[35px] pr-[24px]">
        {pillar.services.slice(0, 4).map((s) => (
          <li key={s.title} className="flex gap-[10px] text-[15px] font-bold leading-[23px]">
            <span aria-hidden="true">•</span>
            {s.title}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-[39px]">
        <LineButton href={`/${pillar.slug}/`}>{buttonLabel}</LineButton>
      </div>
    </article>
  );
}
