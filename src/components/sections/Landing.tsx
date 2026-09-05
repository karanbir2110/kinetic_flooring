import Link from "next/link";
import { landing } from "@/lib/content";
import { hexPoints } from "@/components/ui/Hex";

/** Slow-pulsing hex constellation used only as ambient background texture. */
function AmbientHexField() {
  const cells = [
    { x: 90, y: 120, lit: "electric" as const, delay: 0 },
    { x: 260, y: 60, lit: null, delay: 0 },
    { x: 430, y: 130, lit: "energy" as const, delay: 0.6 },
    { x: 600, y: 55, lit: null, delay: 0 },
    { x: 770, y: 125, lit: "electric" as const, delay: 1.2 },
    { x: 175, y: 205, lit: null, delay: 0 },
    { x: 345, y: 225, lit: "energy" as const, delay: 0.3 },
    { x: 515, y: 205, lit: null, delay: 0 },
    { x: 685, y: 225, lit: "electric" as const, delay: 0.9 },
  ];

  return (
    <svg
      className="pointer-events-none absolute inset-x-0 top-0 h-[60%] w-full opacity-60"
      viewBox="0 0 860 300"
      preserveAspectRatio="xMidYMin slice"
      aria-hidden
    >
      {cells.map((c, i) => {
        const color =
          c.lit === "energy" ? "#25E0A0" : c.lit === "electric" ? "#2F7BFF" : "rgba(255,255,255,0.22)";
        return (
          <g key={i}>
            <polygon
              points={hexPoints(c.x, c.y, 40)}
              fill="none"
              stroke={color}
              strokeWidth={c.lit ? 1.2 : 0.7}
              opacity={c.lit ? 0.85 : 0.35}
            />
            {c.lit && (
              <polygon
                points={hexPoints(c.x, c.y, 40)}
                fill={color}
                className="tile-lit"
                style={{ animationDelay: `${c.delay}s` }}
                opacity="0.14"
              />
            )}
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
      <AmbientHexField />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <div className="landing-fade flex items-center gap-3" style={{ animationDelay: "0.1s" }}>
          <span className="inline-block h-px w-8 bg-electric" aria-hidden />
          <span className="eyebrow text-paper-dim">{landing.eyebrow}</span>
          <span className="inline-block h-px w-8 bg-electric" aria-hidden />
        </div>

        <h1
          className="landing-fade font-display mt-7 text-balance text-[2.6rem] font-bold leading-[1.05] tracking-tightest sm:text-6xl lg:text-[4.2rem]"
          style={{ animationDelay: "0.25s" }}
        >
          <span className="block">{landing.title[0]}</span>
          <span className="block text-electric-bright">{landing.title[1]}</span>
        </h1>

        <p
          className="landing-fade mt-6 max-w-lg text-base leading-relaxed text-paper-dim sm:text-lg"
          style={{ animationDelay: "0.4s" }}
        >
          {landing.sub}
        </p>

        <div className="landing-fade mt-10" style={{ animationDelay: "0.55s" }}>
          <Link
            href={landing.cta.href}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-electric px-8 py-4 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
          >
            {landing.cta.label}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <p
          className="landing-fade mono mt-14 animate-floatSlow text-xs uppercase tracking-[0.18em] text-muted"
          style={{ animationDelay: "0.7s" }}
        >
          {landing.hint}
        </p>
      </div>
    </main>
  );
}
