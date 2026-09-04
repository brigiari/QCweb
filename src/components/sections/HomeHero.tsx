import Link from "next/link";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { Wordmark } from "@/components/brand/Wordmark";
import { Container } from "@/components/ui/Container";
import { LineButton } from "@/components/ui/LineButton";
import { Eyebrow, SerifHeading } from "@/components/ui/Text";
import { mailto } from "@/lib/mailto";

/**
 * Home hero as designed: full-width wordmark, lavender title block, then a
 * sand description block and a purple "Do you have a project?" block.
 */
export function HomeHero() {
  const { hero } = home;
  return (
    <Container as="section" className="pt-[260px] max-lg:pt-[80px] max-sm:pt-[48px]">
      <Wordmark className="block h-auto w-full text-ink" />

      <div className="mt-[14px] bg-lavender px-[64px] pb-[72px] pt-[70px] max-lg:px-8 max-lg:py-12 max-sm:px-5 max-sm:py-8">
        <Eyebrow size={22} className="max-sm:text-[16px]">
          {hero.eyebrow}
        </Eyebrow>
        <SerifHeading as="h1" text={hero.title} size={80} className="mt-[26px]" />
      </div>

      <div className="grid grid-cols-2 max-lg:grid-cols-1">
        <div className="flex min-h-[377px] flex-col bg-sand px-[75px] pb-[40px] pt-[46px] max-lg:min-h-0 max-lg:px-8 max-lg:py-10 max-sm:px-5">
          <p className="text-[30px] leading-[37px] max-sm:text-[22px] max-sm:leading-[29px]">
            {site.description}
          </p>
          <Link
            href="/faq/"
            className="mt-auto inline-block pt-[46px] text-[20px] leading-none underline underline-offset-4 hover:opacity-70"
          >
            {hero.faqLabel}
          </Link>
        </div>
        <div className="flex min-h-[377px] flex-col bg-purple px-[51px] pb-[45px] pt-[52px] text-cream max-lg:min-h-0 max-lg:px-8 max-lg:py-10 max-sm:px-5">
          <SerifHeading as="h2" text={hero.projectHeading} size={60} />
          <div className="mt-auto pt-[60px]">
            <LineButton href={mailto(hero.projectMailSubject)}>{hero.projectButton}</LineButton>
          </div>
        </div>
      </div>
    </Container>
  );
}
