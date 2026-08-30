import type { ReactNode } from "react";

/** Points for a flat-top hexagon centred at (cx,cy) with circumradius r. */
export function hexPoints(cx: number, cy: number, r: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 180) * (60 * i);
    pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(" ");
}

/** Small standalone hexagon badge — used as a section / list marker. */
export function HexMarker({
  children,
  tone = "electric",
  className = "",
}: {
  children?: ReactNode;
  tone?: "electric" | "energy" | "muted";
  className?: string;
}) {
  const stroke =
    tone === "energy" ? "#25E0A0" : tone === "muted" ? "rgba(255,255,255,0.35)" : "#2F7BFF";
  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 44 44" className="h-11 w-11" aria-hidden>
        <polygon
          points={hexPoints(22, 22, 20)}
          fill="none"
          stroke={stroke}
          strokeWidth="1.25"
          opacity="0.9"
        />
        <polygon points={hexPoints(22, 22, 14)} fill={stroke} opacity="0.08" />
      </svg>
      <span className="mono absolute inset-0 flex items-center justify-center text-sm font-medium text-paper">
        {children}
      </span>
    </span>
  );
}
