import type { NavItem } from "./types";
import { pillars } from "./pillars";

/** Horizontal navigation on the home page header (lower-case, as designed). */
export const mainNav: NavItem[] = [
  { label: "about", href: "/about/" },
  ...pillars.map((p) => ({
    label: p.shortTitle.toLowerCase().replace("&", "and"),
    href: `/${p.slug}/`,
  })),
];

/** Full-screen menu (hamburger) on inner pages. */
export const menuNav: NavItem[] = [
  { label: "About", href: "/about/" },
  ...pillars.map((p) => ({ label: p.menuTitle, href: `/${p.slug}/` })),
  { label: "Contact", href: "/contact/" },
];

export const menuSecondary: NavItem = {
  label: "Frequently Asked Questions",
  href: "/faq/",
};

/** Header button. */
export const contactNav: NavItem = { label: "contact", href: "/contact/" };

/** Footer columns. */
export const footerColumns: { title: string; items: NavItem[] }[] = [
  {
    title: "What we do",
    items: pillars.map((p) => ({ label: p.shortTitle, href: `/${p.slug}/` })),
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy", href: "/privacy/" },
      { label: "Legal notice", href: "/legal/" },
    ],
  },
];
