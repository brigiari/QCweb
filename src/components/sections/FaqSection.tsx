import type { Faq } from "@/content/types";
import { faqSection } from "@/content/faq";
import { MinusIcon, PlusIcon } from "@/components/brand/icons";
import { Container } from "@/components/ui/Container";
import { Eyebrow, SerifHeading } from "@/components/ui/Text";

/**
 * FAQ accordion on a grey band. Native <details>/<summary> so it works
 * without JavaScript; the + / − icons swap with CSS.
 */
export function FaqSection({
  groups,
  eyebrow = faqSection.eyebrow,
  title = faqSection.title,
  className = "",
}: {
  groups: { group?: string; items: Faq[] }[];
  eyebrow?: string;
  title?: string;
  className?: string;
}) {
  return (
    <section className={`bg-grey text-ink ${className}`}>
      <Container className="pb-[168px] pt-[205px] max-lg:py-20">
        <div className="text-center">
          <Eyebrow size={18} bold={false}>
            {eyebrow}
          </Eyebrow>
          <SerifHeading text={title} size={60} className="mt-[10px]" />
        </div>
        <div className="mx-auto mt-[70px] w-[899px] max-w-full space-y-[36px] max-lg:mt-12">
          {groups.map(({ group, items }) => (
            <div key={group ?? "faq"}>
              {group && <Eyebrow size={15} className="mb-[14px]">{group}</Eyebrow>}
              <ul className="space-y-[8px]">
                {items.map((f) => (
                  <li key={f.question}>
                    <details className="group">
                      <summary className="flex min-h-[83px] cursor-pointer items-center justify-between gap-6 bg-cream py-[22px] pl-[36px] pr-[30px] text-[30px] font-medium leading-[37px] max-sm:pl-5 max-sm:pr-4 max-sm:text-[20px] max-sm:leading-[26px]">
                        <span>{f.question}</span>
                        <span className="flex size-[38px] shrink-0 items-center justify-center bg-lavender">
                          <PlusIcon className="size-[22px] group-open:hidden" />
                          <MinusIcon className="hidden size-[22px] group-open:block" />
                        </span>
                      </summary>
                      <div className="bg-purple px-[36px] py-[36px] text-[20px] leading-[24px] text-cream max-sm:px-5 max-sm:py-6 max-sm:text-[17px] max-sm:leading-[22px]">
                        {f.answer}
                      </div>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
