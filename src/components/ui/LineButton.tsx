import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "@/components/brand/icons";

/**
 * The mockup's button: a bold label between two 5px rules with a ↗ arrow at
 * the right end. Colour follows the container's text colour (`currentColor`).
 * Width is the container's width unless a `className` sets one.
 */
export function LineButton({
  href,
  children,
  className = "",
  size = "md",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  /** md = 26px label (cards, CTA); lg = 26px on a 626px-wide hero button. */
  size?: "md" | "lg";
}) {
  const inner = (
    <>
      <span className="text-[26px] font-bold leading-none">{children}</span>
      <ArrowUpRight className="size-[26px] shrink-0" />
    </>
  );
  const cls = `group flex w-full items-center justify-between gap-4 border-y-[5px] border-current py-[8px] transition-opacity hover:opacity-80 ${size === "lg" ? "" : ""} ${className}`;
  const external = /^(https?:|mailto:)/.test(href);
  if (external) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
