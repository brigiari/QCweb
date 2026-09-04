/**
 * Icons traced from the mockup. All use currentColor so they follow the text
 * colour of their container.
 */

/** ↗ arrow used in every line button (26 × 26 in the mockup). */
export function ArrowUpRight({ className = "size-[26px]" }: { className?: string }) {
  return (
    <svg viewBox="443 2290 26 26" className={className} aria-hidden="true" fill="currentColor">
      <path d="M446.948 2316L443 2312.05L459.667 2295.38H447.146L447.179 2290H469V2311.82H463.582L463.615 2299.33L446.948 2316Z" />
    </svg>
  );
}

/** → arrow used on the carousel "next" control (41 × 40 in the mockup). */
export function ArrowRight({ className = "h-10 w-[41px]" }: { className?: string }) {
  return (
    <svg viewBox="1407 1938 41 40" className={className} aria-hidden="true" fill="currentColor">
      <path d="M1427.87 1938L1448 1957.96L1427.87 1978L1424.43 1975.01L1439.32 1960.21H1407V1955.64H1439.25L1424.43 1940.99L1427.87 1938Z" />
    </svg>
  );
}

/** ↓ scroll cue under the pillar hero (the → arrow rotated). */
export function ArrowDown({ className = "h-10 w-[41px]" }: { className?: string }) {
  return <ArrowRight className={`${className} rotate-90`} />;
}

/** Three 39 × 5 bars, 9px apart. */
export function HamburgerIcon({ className = "h-[33px] w-[39px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 39 33" className={className} aria-hidden="true" fill="currentColor">
      <rect y="0" width="39" height="5" />
      <rect y="14" width="39" height="5" />
      <rect y="28" width="39" height="5" />
    </svg>
  );
}

/** × close, two rotated 46.6 × 5.7 bars. */
export function CloseIcon({ className = "size-[37px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 37 37" className={className} aria-hidden="true" fill="currentColor">
      <rect x="0" y="33.978" width="46.638" height="5.688" transform="rotate(-45 0 33.978)" />
      <rect x="32.978" y="37.999" width="46.638" height="5.688" transform="rotate(-135 32.978 37.999)" />
    </svg>
  );
}

/** + / − for the FAQ accordion: 4px strokes, 22px across. */
export function PlusIcon({ className = "size-[24px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" stroke="currentColor" strokeWidth="4" fill="none">
      <path d="M12 0.5V23.5" />
      <path d="M23.5 12H0.5" />
    </svg>
  );
}

export function MinusIcon({ className = "size-[24px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" stroke="currentColor" strokeWidth="4" fill="none">
      <path d="M23.5 12H0.5" />
    </svg>
  );
}
