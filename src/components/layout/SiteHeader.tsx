import Link from "next/link";
import { mainNav } from "@/content/nav";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { mailto } from "@/lib/mailto";
import { Logo } from "./Logo";

/**
 * Top navigation. The mobile menu is a native <details> element so the header
 * works without any client-side JavaScript (the site is fully static).
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Logo className="text-lg" />

        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-fg-muted transition-colors hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
          <Button href={mailto()} className="ml-2">
            Get in touch
          </Button>
        </nav>

        <details className="group relative md:hidden">
          <summary
            className="flex cursor-pointer list-none items-center rounded-md border border-border px-3 py-1.5 text-sm font-medium [&::-webkit-details-marker]:hidden"
            aria-label="Open menu"
          >
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-60 rounded-lg border border-border bg-bg p-2 shadow-lg">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-border pt-2">
              <Button href={mailto()} className="w-full">
                Get in touch
              </Button>
            </div>
          </div>
        </details>
      </Container>
    </header>
  );
}
