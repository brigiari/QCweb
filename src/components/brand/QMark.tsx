/** The "Q" mark, traced from the designer's file. Native size 44 × 57. */
export function QMark({
  className = "",
  title = "Quantum Care",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="711 30 44 57"
      className={className}
      role="img"
      aria-label={title}
      fill="currentColor"
    >
      <path d="M711 53.2063C711 39.8488 719.326 30 733 30C746.674 30 755 39.8488 755 53.2063C755 66.5637 746.674 76.4741 733 76.4741C719.326 76.4741 711 66.5637 711 53.2063ZM741.994 53.2063C741.994 45.7581 739.138 40.1566 733 40.1566C726.862 40.1566 724.006 45.7581 724.006 53.2063C724.006 60.6544 726.862 66.3175 733 66.3175C739.138 66.3175 741.994 60.6544 741.994 53.2063ZM732.575 78.6901H753.845V87H732.575V78.6901Z" />
    </svg>
  );
}
