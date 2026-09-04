"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contactNav, mainNav, menuNav, menuSecondary } from "@/content/nav";
import { QMark } from "@/components/brand/QMark";
import { Wordmark } from "@/components/brand/Wordmark";
import { CloseIcon, HamburgerIcon } from "@/components/brand/icons";
import { Container } from "@/components/ui/Container";

/**
 * Site header, two variants as designed:
 *  - home:  Q mark · horizontal lower-case nav · "contact" button
 *  - inner: hamburger · centred wordmark · "contact" button
 * Both open the full-screen lavender menu (the home nav collapses into it on
 * narrow screens). Header height is the mockup's 118px.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const contactButton = (
    <Link
      href={contactNav.href}
      className="flex h-[45px] items-center bg-purple px-[22px] text-[22px] leading-none text-cream transition-opacity hover:opacity-90 max-sm:h-[38px] max-sm:px-4 max-sm:text-[17px]"
    >
      {contactNav.label}
    </Link>
  );

  const menuButton = (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label="Open menu"
      aria-expanded={open}
      className="flex h-[45px] items-center text-ink"
    >
      <HamburgerIcon className="h-[33px] w-[39px]" />
    </button>
  );

  return (
    <>
      <header className="relative z-30">
        <Container className="flex h-[118px] items-center justify-between pl-[61px] pr-[71px] max-lg:h-[88px] max-lg:px-gutter max-sm:px-5">
          {isHome ? (
            <>
              <Link href="/" aria-label="Quantum Care — home" className="text-ink">
                <QMark className="h-[57px] w-[44px] max-sm:h-[44px] max-sm:w-[34px]" />
              </Link>
              <nav aria-label="Main" className="flex items-center gap-[60px] max-lg:hidden">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[22px] leading-none text-ink transition-opacity hover:opacity-70"
                  >
                    {item.label}
                  </Link>
                ))}
                {contactButton}
              </nav>
              <div className="flex items-center gap-4 lg:hidden">
                {contactButton}
                {menuButton}
              </div>
            </>
          ) : (
            <>
              {menuButton}
              <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-ink">
                <Wordmark className="h-[42px] w-auto max-sm:h-[26px]" />
              </Link>
              <div className="max-sm:invisible">{contactButton}</div>
            </>
          )}
        </Container>
      </header>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-50 overflow-y-auto bg-lavender text-ink transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <Container className="relative">
          <div className="flex h-[118px] items-center justify-between px-[27px] max-lg:h-[88px] max-lg:px-0">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex items-center gap-[27px] text-[18px] leading-none"
              aria-label="Close menu"
            >
              <CloseIcon className="size-[37px]" />
              close
            </button>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="absolute left-1/2 top-[30px] -translate-x-1/2 max-lg:top-[16px]"
              aria-label="Quantum Care — home"
            >
              <QMark className="h-[57px] w-[44px]" />
            </Link>
          </div>
          <nav aria-label="Menu" className="mt-[183px] px-[12px] pb-16 max-lg:mt-16 max-lg:px-0">
            <ul className="border-t-[8px] border-cream">
              {menuNav.map((item) => (
                <li key={item.href} className="border-b-[8px] border-cream">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block pb-[7px] pt-[18px] font-serif text-[clamp(40px,5.3vw,80px)] leading-none transition-opacity hover:opacity-70"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={menuSecondary.href}
              onClick={() => setOpen(false)}
              className="mt-[31px] inline-block text-[30px] font-bold leading-none hover:opacity-70 max-sm:text-[22px]"
            >
              {menuSecondary.label}
            </Link>
          </nav>
        </Container>
      </div>
    </>
  );
}
