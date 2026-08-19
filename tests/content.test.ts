import { describe, expect, it } from "vitest";
import { pillars, getPillar } from "@/content/pillars";
import { projects } from "@/content/projects";
import { principles } from "@/content/principles";
import { mainNav, footerNav } from "@/content/nav";
import { site } from "@/content/site";

/**
 * Guard-rails for the content files. These are the files most likely to be
 * edited by hand (copy changes, new projects), so we check the structural
 * invariants the pages rely on.
 */

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

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
      expect(p.tagline.length).toBeGreaterThan(0);
      expect(p.summary.length).toBeGreaterThan(0);
      expect(p.intro.length).toBeGreaterThan(0);
      expect(p.services.length).toBeGreaterThanOrEqual(3);
      expect(p.audiences.length).toBeGreaterThan(0);
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
  it("links every pillar and uses trailing-slash hrefs", () => {
    for (const p of pillars) {
      expect(mainNav.some((n) => n.href === `/${p.slug}/`)).toBe(true);
    }
    for (const n of [...mainNav, ...footerNav]) {
      expect(n.href).toMatch(/^\/.*\/$/);
    }
  });
});

describe("site config", () => {
  it("has the essentials", () => {
    expect(site.name).toBe("Quantum Care");
    expect(site.url).toMatch(/^https:\/\//);
    expect(site.url.endsWith("/")).toBe(false);
    expect(site.contactEmail).toMatch(/^[^@\s]+@[^@\s]+$/);
    expect(site.process.length).toBeGreaterThanOrEqual(3);
    expect(principles.length).toBeGreaterThanOrEqual(4);
  });
});
