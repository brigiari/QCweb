import type { MetadataRoute } from "next";
import { pillars } from "@/content/pillars";
import { site } from "@/content/site";

// Required for static export: the sitemap is generated once at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about/", "/contact/"];
  const pillarRoutes = pillars.map((p) => `/${p.slug}/`);
  return [...staticRoutes, ...pillarRoutes].map((path) => ({
    url: `${site.url}${path || "/"}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
