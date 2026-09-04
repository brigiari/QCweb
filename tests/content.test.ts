import { describe, expect, it } from "vitest";
import { pillars, getPillar } from "@/content/pillars";
import { projects } from "@/content/projects";
import { principles } from "@/content/principles";
import { about } from "@/content/about";
import { allFaqs } from "@/content/faq";
import { mainNav, menuNav, footerColumns, contactNav, menuSecondary } from "@/content/nav";
import { site } from "@/content/site";

/**
 * Guard-rails for the content files — the files most likely to be edited by
 * hand — checking the structural invariants the pages rely on.
 */

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const TONES = ["lavender", "sand", "grey", "purple", "dark", "cream"];

describe("pillars", () => {
  it("has exactly three pillars in the agreed order", () => {
    expect(pillars.map((p) => p.slug)).toEqual([
      "clinical-research",
      "evidence-synthesis",
      "research",
    ]);
  });

  it("uses URL-safe, unique slugs", () => {
    const slugs = pillars.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(s).toMatch(SLUG);
  });

  it("has complete copy for every pillar", () => {
    for (const p of pillars) {
      expect(p.title.length).toBeGreaterThan(0);
      expect(p.shortTitle.length).toBeGreaterThan(0);
      expect(p.menuTitle.length).toBeGreaterThan(0);
      expect(TONES).toContain(p.tone);
      expect(p.tagline.length).toBeGreaterThan(0);
      expect(p.summary.length).toBeGreaterThan(0);
      // Approach + Team blocks
      expect(p.intro.length).toBe(2);
      expect(p.services.length).toBeGreaterThanOrEqual(3);
      // Typical clients row is designed for five entries
      expect(p.audiences.length).toBe(5);
      expect(p.cta.buttonLabel.length).toBeGreaterThan(0);
      expect(p.seoDescription.length).toBeLessThanOrEqual(160);
      for (const group of p.services) {
        expect(group.items.length).toBeGreaterThan(0);
      }
    }
  });

  it("getPillar throws on unknown slug", () => {
    expect(() => getPillar("nope")).toThrow();
  });
});

describe("projects", () => {
  it("has unique slugs and valid GitHub URLs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const p of projects) {
      expect(p.slug).toMatch(SLUG);
      expect(p.repoUrl).toMatch(/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+$/);
      expect(p.tags.length).toBeGreaterThan(0);
    }
  });
});

describe("navigation", () => {
  it("links every pillar from the home nav and the menu, with trailing slashes", () => {
    for (const p of pillars) {
      expect(mainNav.some((n) => n.href === `/${p.slug}/`)).toBe(true);
      expect(menuNav.some((n) => n.href === `/${p.slug}/`)).toBe(true);
    }
    const all = [...mainNav, ...menuNav, contactNav, menuSecondary, ...footerColumns.flatMap((c) => c.items)];
    for (const n of all) expect(n.href).toMatch(/^\/.*\/$/);
  });
});

describe("about and faq", () => {
  it("has four text tiles and two images", () => {
    expect(about.tiles.length).toBe(4);
    expect(about.images.length).toBe(2);
    for (const t of about.tiles) expect(TONES).toContain(t.tone);
  });

  it("has at least one question in every FAQ group", () => {
    for (const g of allFaqs) expect(g.items.length).toBeGreaterThan(0);
  });
});

describe("site config", () => {
  it("has the essentials", () => {
    expect(site.name).toBe("Quantum Care");
    expect(site.url).toMatch(/^https:\/\//);
    expect(site.url.endsWith("/")).toBe(false);
    expect(site.contactEmail).toMatch(/^[^@\s]+@[^@\s]+$/);
    expect(site.contacts.length).toBeGreaterThan(0);
    // The process grid is a 2 × 2 layout.
    expect(site.process.length).toBe(4);
    expect(principles.length).toBe(6);
  });
});
