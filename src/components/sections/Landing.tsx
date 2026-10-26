import Link from "next/link";
import { landing } from "@/lib/content";
import { hexPoints } from "@/components/ui/Hex";

/**
 * Honeycomb field of regular (flat-top) hexagons used as ambient background
 * on the landing page. Cells sit on a hexagonal lattice so they tile edge to
 * edge. A third of them glow and blink (CSS class `.tile-blink` in
 * globals.css); the rest stay as quiet outlines. Colours follow the active
 * theme via CSS variables.
 */
function AmbientTileField() {
  const W = 1440; // drawing width
  const H = 810; // drawing height (16:9) - the SVG fills the whole screen
  const R = 34; // hexagon circumradius (centre -> corner)
  const D = R * Math.sqrt(3); // flat-top hexagon: centre-to-centre distance
  const DRAW = R - 2; // drawn radius, leaves a thin gap between cells
  const vecs = [90, 210, 330].map((deg) => {
    const t = (deg * Math.PI) / 180;
    return { x: D * Math.cos(t), y: -D * Math.sin(t) };
  });

  const cells: {
    x: number;
    y: number;
    lit: "electric" | "energy" | null;
    soft: boolean;
    delay: number;
  }[] = [];
  // build the lattice well beyond the drawing so any screen shape is covered
  for (let i = -30; i <= 30; i++) {
    for (let j = -30; j <= 30; j++) {
      const x = W / 2 + i * vecs[0].x + j * vecs[1].x;
      const y = H / 2 + i * vecs[0].y + j * vecs[1].y;
      // "slice" scaling means the viewBox always covers the screen, so only
      // cells inside it are needed (keeps the DOM light on phones)
      if (x < -R || x > W + R || y < -R || y > H + R) continue;
      const k = (((i * 2 + j * 3) % 6) + 6) % 6;
      const lit = k === 0 ? "electric" : k === 3 ? "energy" : null;
      // tiles behind the headline blink more gently so the text stays readable
      const soft = Math.abs(x - W / 2) < 340 && y > 130 && y < 700;
      // light sweeps across the field like footsteps (negative = already running)
      const delay = -(3.4 - ((x + y * 0.6) / (W + H * 0.6)) * 3.4);
      cells.push({ x, y, lit, soft, delay });
    }
  }

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {cells.map((c, i) => {
        const pts = hexPoints(c.x, c.y, DRAW);
        if (!c.lit) {
          return (
            <polygon
              key={i}
              points={pts}
              fill="none"
              strokeWidth="0.9"
              strokeLinejoin="round"
              style={{ stroke: "rgb(var(--c-paper))" }}
              opacity="0.14"
            />
          );
        }
        const color = c.lit === "energy" ? "rgb(var(--c-energy))" : "rgb(var(--c-electric))";
        return (
          <g key={i}>
            <polygon
              points={pts}
              fill="none"
              strokeWidth="1.4"
              strokeLinejoin="round"
              style={{ stroke: color }}
              opacity={c.soft ? "0.45" : "0.7"}
            />
            <polygon
              points={pts}
              className={c.soft ? "tile-blink-soft" : "tile-blink"}
              style={{ fill: color, animationDelay: `${c.delay.toFixed(2)}s` }}
            />
          </g>
        );
      })}
    </svg>
  );
}

export default function Landing() {
  return (
    <main
      id="landing-top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0 grid-texture opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-electric/10 via-ink to-ink" />
      <AmbientTileField />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-5 py-16 text-center sm:px-6">
        <div className="landing-fade flex items-center gap-3" style={{ animationDelay: "0.1s" }}>
          <span className="inline-block h-px w-6 shrink-0 bg-electric sm:w-8" aria-hidden />
          <span className="eyebrow text-balance text-paper-dim">{landing.eyebrow}</span>
          <span className="inline-block h-px w-6 shrink-0 bg-electric sm:w-8" aria-hidden />
        </div>

        <h1
          className="landing-fade font-display mt-6 text-balance text-[2.25rem] font-bold leading-[1.05] tracking-tightest sm:text-6xl lg:text-[4.2rem]"
          style={{ animationDelay: "0.25s" }}
        >
          <span className="block">{landing.title[0]}</span>
          <span className="block text-electric-bright">{landing.title[1]}</span>
        </h1>

        <p
          className="landing-fade mt-5 max-w-lg text-[0.9375rem] leading-relaxed text-paper-dim sm:text-lg"
          style={{ animationDelay: "0.4s" }}
        >
          {landing.sub}
        </p>

        <div className="landing-fade mt-8 sm:mt-10" style={{ animationDelay: "0.55s" }}>
          <Link
            href={landing.cta.href}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-electric px-8 py-4 text-base font-semibold text-onaccent shadow-glow active:scale-[0.98] transition-transform hover:-translate-y-0.5"
          >
            {landing.cta.label}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <p
          className="landing-fade mono mt-10 animate-floatSlow sm:mt-14 text-xs uppercase tracking-[0.18em] text-muted"
          style={{ animationDelay: "0.7s" }}
        >
          {landing.hint}
        </p>
      </div>
    </main>
  );
}