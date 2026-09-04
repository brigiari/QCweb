import Link from "next/link";
import { footerColumns } from "@/content/nav";
import { site } from "@/content/site";
import { QMark } from "@/components/brand/QMark";
import { Container } from "@/components/ui/Container";

/** Dark footer: Q mark + rule, description, three link columns, legal line. */
export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-cream">
      <Container className="pb-[24px] pt-[53px]">
        <div className="flex items-end gap-[14px]">
          <Link href="/" aria-label="Quantum Care — home" className="shrink-0">
            <QMark className="h-[57px] w-[44px]" />
          </Link>
          <div className="mb-0 h-[7px] flex-1 bg-cream" />
        </div>

        <div className="mt-[90px] grid grid-cols-[1fr_295px_207px_214px] gap-x-6 max-lg:grid-cols-2 max-lg:gap-y-10 max-sm:grid-cols-1">
          <p className="max-w-[450px] text-[18px] leading-[22px] max-lg:col-span-2 max-sm:col-span-1">
            {site.description}
          </p>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h2 className="text-[18px] font-bold uppercase leading-[22px]">{col.title}</h2>
              <ul className="mt-[24px] space-y-[4px]">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[18px] leading-[22px] transition-opacity hover:opacity-70"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-[60px] h-[7px] bg-cream" />
        <div className="mt-[26px] flex flex-wrap justify-between gap-x-6 gap-y-2 text-[18px] leading-[22px] max-sm:text-[15px]">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            P.IVA {site.legal.vatNumber} · {site.legal.registeredOffice}
          </p>
        </div>
      </Container>
    </footer>
  );
}
