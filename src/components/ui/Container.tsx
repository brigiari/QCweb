import type { ReactNode } from "react";

/**
 * Page-width wrapper: the mockup's 1512px canvas. The designer's frame uses a
 * 40px left gutter and a 22px right gutter (content spans 40 → 1490); we keep
 * that at desktop width and fall back to symmetric gutters on smaller screens.
 */
export function Container({
  children,
  className = "",
  as: Tag = "div",
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className={`mx-auto w-full max-w-(--container-site) pl-gutter pr-[22px] max-lg:pr-gutter ${className}`}
    >
      {children}
    </Tag>
  );
}
