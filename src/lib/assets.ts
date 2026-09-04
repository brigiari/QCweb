/**
 * Prefix a `public/` asset path with the deployment base path.
 *
 * Next.js prefixes its own assets and <Link> hrefs with `basePath`, but not
 * plain <img src> or CSS `url()` values. When the site is served from a
 * sub-path (GitHub Pages project site: https://user.github.io/QCweb/) an
 * absolute "/images/x.jpg" would 404 — use `asset("/images/x.jpg")` instead.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
