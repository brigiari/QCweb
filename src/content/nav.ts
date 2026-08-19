import type { NavItem } from "./types";
import { pillars } from "./pillars";

/** Primary navigation: the three pillars, then About and Contact. */
export const mainNav: NavItem[] = [
  ...pillars.map((p) => ({ label: p.shortTitle, href: `/${p.slug}/` })),
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

/** Secondary links shown only in the footer. */
export const footerNav: NavItem[] = [
  { label: "Privacy", href: "/privacy/" },
  { label: "Legal notice", href: "/legal/" },
];
