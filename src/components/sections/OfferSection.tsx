"use client";

import { useRef } from "react";
import type { ServiceGroup, Tone } from "@/content/types";
import { ArrowRight } from "@/components/brand/icons";
import { Container } from "@/components/ui/Container";
import { Eyebrow, SerifHeading, toneClass } from "@/components/ui/Text";

const CARD_WIDTH = 504;
const CARD_GAP = 30;
const tones: Tone[] = ["sand", "lavender", "dark"];

/**
 * "What we offer": a horizontal carousel of 504px cards (sand → lavender →
 * dark, repeating) with a "next" control, as in the mockup. Scrolls natively
 * (touch / trackpad) and snaps to cards.
 */
export function OfferSection({
  eyebrow,
  title,
  groups,
}: {
  eyebrow: string;
  title: string;
  groups: ServiceGroup[];
}) {
  const track = useRef<HTMLUListElement>(null);

  function next() {
    const el = track.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
    el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + CARD_WIDTH + CARD_GAP, behavior: "smooth" });
  }

  return (
    <section id="services" className="pt-[184px] max-lg:pt-20">
      <Container>
        <Eyebrow size={18}>{eyebrow}</Eyebrow>
        <SerifHeading text={title} size={60} className="mt-[10px]" />
      </Container>
      <div className="relative">
        <ul
          ref={track}
          className="scrollbar-none mt-[71px] flex snap-x snap-mandatory gap-[30px] overflow-x-auto scroll-smooth px-gutter max-lg:mt-10"
          style={{ scrollPaddingLeft: "var(--spacing-gutter)" }}
        >
          {groups.map((g, i) => (
            <li
              key={g.title}
              className={`flex w-[504px] shrink-0 snap-start flex-col px-[33px] pb-[26px] pt-[32px] max-sm:w-[86vw] max-sm:px-6 ${toneClass[tones[i % tones.length]]}`}
            >
              <h3 className="flex min-h-[278px] items-start justify-center text-center font-serif text-[60px] leading-none max-sm:min-h-0 max-sm:text-[40px]">
                {g.title}
              </h3>
              <ul
                className={`rounded-inset py-[17px] pl-[27px] pr-[24px] text-[15px] font-medium leading-[23px] max-sm:mt-8 ${
                  tones[i % tones.length] === "lavender" ? "bg-purple text-cream" : "bg-cream text-ink"
                }`}
              >
                {g.items.map((item) => (
                  <li key={item} className="flex gap-[10px]">
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-[30px] text-[18px] leading-[22px]">{g.description}</p>
            </li>
          ))}
          {/* trailing space so the last card can snap fully into view */}
          <li aria-hidden="true" className="w-[10px] shrink-0" />
        </ul>
        <button
          type="button"
          onClick={next}
          aria-label="Show next service"
          className="absolute right-[22px] top-[342px] flex h-[61px] w-[91px] items-center justify-center bg-ink text-lavender transition-opacity hover:opacity-90 max-lg:static max-lg:ml-auto max-lg:mr-gutter max-lg:mt-4 max-sm:h-[48px] max-sm:w-[64px]"
        >
          <ArrowRight className="h-10 w-[41px]" />
        </button>
      </div>
    </section>
  );
}
