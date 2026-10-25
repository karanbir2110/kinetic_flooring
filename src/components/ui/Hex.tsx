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

/**
 * Points for the three-armed "tri-wing" tile (12-sided, 3-fold symmetric),
 * centred at (cx,cy). `r` is the centre-to-arm-tip distance.
 * Arms point up, down-left and down-right; the three inner notches are 120°.
 * Copies of this tile interlock arm-into-notch on a triangular lattice.
 */
export function triPoints(cx: number, cy: number, r: number): string {
  const h = r * 0.33; // half-width of each arm
  const d = h / Math.sin(Math.PI / 3); // centre -> notch distance
  const pts: string[] = [];
  for (const deg of [90, 210, 330]) {
    const t = (deg * Math.PI) / 180;
    const ux = Math.cos(t);
    const uy = Math.sin(t);
    const px = -uy;
    const py = ux;
    const at = (a: number, b: number): [number, number] => [ux * a + px * b, uy * a + py * b];
    for (const [a, b] of [
      [r - h, -h],
      [r, 0],
      [r - h, h],
    ] as const) {
      const [x, y] = at(a, b);
      pts.push(`${(cx + x).toFixed(2)},${(cy - y).toFixed(2)}`);
    }
    const n = t + Math.PI / 3;
    pts.push(`${(cx + d * Math.cos(n)).toFixed(2)},${(cy - d * Math.sin(n)).toFixed(2)}`);
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