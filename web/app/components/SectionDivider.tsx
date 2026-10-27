/**
 * SectionDivider — pemisah tipis antar section.
 * Pakai di antara dua section yang background-nya sama (putih–putih).
 *
 * Variant:
 *   "line"   → garis 1 px solid tipis (default)
 *   "dotted" → garis putus-putus
 *   "fade"   → garis dengan opacity fade di kiri & kanan
 */
type Props = {
  variant?: "line" | "dotted" | "fade";
  className?: string;
};

export default function SectionDivider({ variant = "fade", className = "" }: Props) {
  if (variant === "dotted") {
    return (
      <div className={`container-page ${className}`}>
        <div
          style={{
            height: "1px",
            backgroundImage:
              "repeating-linear-gradient(to right, var(--color-hair) 0, var(--color-hair) 6px, transparent 6px, transparent 12px)",
          }}
        />
      </div>
    );
  }

  if (variant === "fade") {
    return (
      <div className={`container-page ${className}`}>
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, var(--color-hair) 20%, var(--color-hair) 80%, transparent)",
          }}
        />
      </div>
    );
  }

  // line (solid)
  return (
    <div className={`container-page ${className}`}>
      <div style={{ height: "1px", background: "var(--color-hair)" }} />
    </div>
  );
}
