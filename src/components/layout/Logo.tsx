import Link from "next/link";
import { site } from "@/content/site";

/**
 * Placeholder wordmark. Replace the inner markup with the real logo (SVG)
 * when the brand assets arrive; keep the Link and aria-label.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`inline-flex items-center gap-2 font-semibold tracking-tight ${className}`}
    >
      <span
        aria-hidden="true"
        className="inline-block size-2.5 rounded-full bg-accent"
      />
      {site.name}
    </Link>
  );
}
