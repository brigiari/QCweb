import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@/content/site";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

/**
 * Fonts.
 *
 * The designer's typefaces are **Lastik** (headings) and **Neue Haas Grotesk**
 * (text). Both are commercial and are not yet licensed, so the site runs on
 * free stand-ins until the licensed .woff2 files are available:
 *  - headings: Fraunces (soft, wide, "70s" serif — closest free face to Lastik)
 *  - text: Helvetica Neue where installed (metrically close to Neue Haas
 *    Grotesk, same lineage), Inter elsewhere.
 *
 * To switch to the licensed fonts: drop the files in `src/fonts/`, replace the
 * two `next/font/google` calls below with `next/font/local` (see
 * docs/DESIGN-HANDOFF.md), and keep the CSS variable names.
 */
const serif = Fraunces({
  // Variable font: weight is set in CSS (.font-serif → 400); axes below.
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  variable: "--font-serif-face",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_GB",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.locale} className={`${serif.variable} ${sans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-cream focus:px-3 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
