import type { ReactNode } from "react";

/**
 * Small typographic primitives matching the mockup's type scale.
 */

/** Upper-case bold label above a heading. Sizes: 26 (home sections), 22 (hero), 18 (inner pages), 15 (cards). */
export function Eyebrow({
  children,
  size = 18,
  className = "",
  bold = true,
}: {
  children: ReactNode;
  size?: 26 | 22 | 18 | 15;
  className?: string;
  bold?: boolean;
}) {
  return (
    <p
      className={`uppercase leading-none ${bold ? "font-bold" : "font-normal"} ${className}`}
      style={{ fontSize: size }}
    >
      {children}
    </p>
  );
}

/** Serif display heading. `text` may contain "\n" for the mockup's line breaks. */
export function SerifHeading({
  text,
  size = 60,
  as: Tag = "h2",
  className = "",
}: {
  text: string;
  size?: 100 | 80 | 60;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const responsive =
    size === 80
      ? "text-[clamp(44px,5.3vw,80px)]"
      : size === 60
        ? "text-[clamp(38px,4vw,60px)]"
        : "text-[clamp(56px,6.6vw,100px)]";
  return (
    <Tag className={`font-serif leading-none ${responsive} ${className}`}>
      {text.split("\n").map((line, i, arr) => (
        <span key={i}>
          {line}
          {i < arr.length - 1 && <br className="hidden lg:inline" />}
          {i < arr.length - 1 && <span className="lg:hidden"> </span>}
        </span>
      ))}
    </Tag>
  );
}

/** Short 18px note placed to the right of a section title. */
export function SideNote({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`max-w-[300px] text-[18px] leading-[22px] ${className}`}>{children}</p>;
}

/** Paragraphs with the mockup's body sizes. */
export function Body({
  children,
  size = 20,
  className = "",
}: {
  children: ReactNode;
  size?: 30 | 26 | 20 | 18 | 15;
  className?: string;
}) {
  const lh = { 30: "37px", 26: "33px", 20: "24px", 18: "22px", 15: "23px" }[size];
  return (
    <p className={className} style={{ fontSize: size, lineHeight: lh }}>
      {children}
    </p>
  );
}

/** Tone → background/text classes for tinted blocks. */
export const toneClass = {
  lavender: "bg-lavender text-ink",
  sand: "bg-sand text-ink",
  grey: "bg-grey text-ink",
  purple: "bg-purple text-cream",
  dark: "bg-ink text-cream",
  cream: "bg-cream text-ink",
} as const;
