import type { Metadata } from "next";
import { allFaqs, faqPage } from "@/content/faq";
import { home } from "@/content/home";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageTitle } from "@/components/sections/PageTitle";
import { mailto } from "@/lib/mailto";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: faqPage.lede,
};

export default function FaqPage() {
  return (
    <>
      <PageTitle title={faqPage.title} lede={faqPage.lede} />
      <FaqSection
        groups={allFaqs}
        eyebrow="Pick the area closest to your question"
        title="Questions, by area"
        className="mt-[120px] max-lg:mt-16"
      />
      <CtaBand
        heading={home.cta.heading}
        body={home.cta.body}
        buttonLabel={home.cta.buttonLabel}
        href={mailto(home.cta.mailSubject)}
      />
    </>
  );
}
