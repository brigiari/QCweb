import { about } from "@/content/about";
import { toneClass } from "@/components/ui/Text";
import { asset } from "@/lib/assets";

/** About: 3 × 2 grid — text tile, image, text tile / text tile, image, text tile. */
export function AboutTiles() {
  const [origins, clients, research, team] = about.tiles;
  const [warm, purple] = about.images;
  return (
    <section className="mt-[180px] grid grid-cols-3 max-lg:mt-16 max-lg:grid-cols-1">
      <TextTile {...origins} />
      <ImageTile {...warm} />
      <TextTile {...clients} />
      <TextTile {...research} />
      <ImageTile {...purple} />
      <TextTile {...team} />
    </section>
  );
}

function TextTile({ title, body, tone }: (typeof about.tiles)[number]) {
  return (
    <div className={`flex aspect-[504/645] flex-col px-[34px] pb-[37px] pt-[32px] max-lg:aspect-auto max-lg:min-h-[360px] max-sm:px-5 max-sm:py-8 ${toneClass[tone]}`}>
      <h2 className="text-center font-serif text-[60px] leading-none max-sm:text-[44px]">{title}</h2>
      <div className="mt-auto space-y-[22px] pt-10 text-[18px] leading-[22px]">
        {body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

function ImageTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="aspect-[504/645] max-lg:aspect-[3/1]">
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimisation */}
      <img src={asset(src)} alt={alt} className="size-full object-cover" />
    </div>
  );
}
