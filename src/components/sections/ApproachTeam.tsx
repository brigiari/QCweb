import type { Pillar } from "@/content/types";
import { Eyebrow } from "@/components/ui/Text";

/** Two half-width blocks under the hero: "Approach" (sand) and "Team" (purple). */
export function ApproachTeam({ pillar }: { pillar: Pillar }) {
  const [approach, team] = pillar.intro;
  return (
    <section id="approach" className="grid grid-cols-2 max-lg:grid-cols-1">
      <Block label="Approach" tone="bg-sand text-ink">
        {approach}
      </Block>
      <Block label="Team" tone="bg-purple text-cream">
        {team}
      </Block>
    </section>
  );
}

function Block({
  label,
  tone,
  children,
}: {
  label: string;
  tone: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`grid min-h-[240px] grid-cols-[190px_1fr] px-gutter py-[55px] max-sm:grid-cols-1 max-sm:gap-4 max-sm:px-5 max-sm:py-8 ${tone}`}>
      <Eyebrow size={18}>{label}</Eyebrow>
      <p className="max-w-[463px] text-[18px] leading-[22px]">{children}</p>
    </div>
  );
}
