import Link from "next/link";
import { footerNav } from "@/content/nav";
import { pillars } from "@/content/pillars";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo className="text-lg" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted">
              {site.description}
            </p>
            <p className="mt-4 text-sm text-fg-muted">{site.location}</p>
          </div>

          <FooterColumn title="What we do">
            {pillars.map((p) => (
              <FooterLink key={p.slug} href={`/${p.slug}/`}>
                {p.shortTitle}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            <FooterLink href="/about/">About</FooterLink>
            <FooterLink href="/contact/">Contact</FooterLink>
            {site.social.map((s) => (
              <FooterLink key={s.href} href={s.href}>
                {s.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Legal">
            {footerNav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
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

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="md:col-span-2">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
        {title}
      </h2>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  const cls = "text-sm text-fg-muted transition-colors hover:text-fg";
  return (
    <li>
      {external ? (
        <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <Link href={href} className={cls}>
          {children}
        </Link>
      )}
    </li>
  );
}
