import { site } from "@/content/site";

/** Build a mailto: link to the site contact address with an optional subject. */
export function mailto(subject?: string): string {
  const base = `mailto:${site.contactEmail}`;
  if (!subject) return base;
  return `${base}?subject=${encodeURIComponent(`[${site.name}] ${subject}`)}`;
}
