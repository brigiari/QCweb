import type { Metadata } from "next";
import { contact } from "@/content/contact";
import { site } from "@/content/site";
import { ContactTables, StartSection } from "@/components/sections/ContactSections";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageTitle } from "@/components/sections/PageTitle";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} about study design, statistics, evidence synthesis, guidelines or research tooling.`,
};

export default function ContactPage() {
  return (
    <>
      <PageTitle title={contact.title} lede={contact.lede} />
      <ContactTables />
      <StartSection />
      <CtaBand
        heading={contact.faq.heading}
        body={contact.faq.body}
        buttonLabel={contact.faq.buttonLabel}
        href={contact.faq.href}
        className="mt-[89px] max-lg:mt-20"
      />
    </>
  );
}
