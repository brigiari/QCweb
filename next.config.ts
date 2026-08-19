import type { NextConfig } from "next";

/**
 * Static export: `next build` writes a plain HTML/CSS/JS site into `out/`,
 * which any static host (GitHub Pages, Vercel, Netlify, an nginx box) can serve.
 *
 * NEXT_PUBLIC_BASE_PATH is only needed when the site is served from a
 * sub-path (e.g. GitHub Pages project site at https://user.github.io/QCweb).
 * Leave it unset for a custom domain or Vercel.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  images: {
    // The default next/image loader needs a server; static export cannot use it.
    unoptimized: true,
  },
};

export default nextConfig;
