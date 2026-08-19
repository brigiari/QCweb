import type { ReactNode } from "react";

/** Eyebrow + heading + optional lede, used at the top of every section. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  as: Tag = "h2",
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "mx-auto text-center" : "";
  const size =
    Tag === "h1"
      ? "text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]"
      : Tag === "h2"
        ? "text-3xl sm:text-4xl font-semibold leading-tight"
        : "text-xl font-semibold";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      )}
      <Tag className={size}>{title}</Tag>
      {lede && <p className="mt-5 text-lg leading-relaxed text-fg-muted">{lede}</p>}
    </div>
  );
}
