import Image from "next/image";
import { hero, brand } from "@/lib/content";
import { hexPoints } from "@/components/ui/Hex";

function FlowStrip() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3">
      {hero.flow.map((step, i) => (
        <div key={step} className="flex items-center gap-3">
          <span className="mono text-xs uppercase tracking-[0.18em] text-paper">
            <span className="text-electric-bright">{String(i + 1).padStart(2, "0")}</span> {step}
          </span>
          {i < hero.flow.length - 1 && (
            <svg width="34" height="8" viewBox="0 0 34 8" aria-hidden className="text-electric">
              <line x1="0" y1="4" x2="26" y2="4" stroke="currentColor" strokeWidth="1" className="flow-path" />
              <path d="M26 1 L33 4 L26 7" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

/** Subtle engineering hex overlay for the lower band of the hero. */
function HexOverlay() {
  const cells = [
    { x: 120, y: 250, lit: "electric" as const },
    { x: 300, y: 300, lit: null },
    { x: 480, y: 250, lit: "energy" as const },
    { x: 660, y: 300, lit: null },
    { x: 840, y: 250, lit: "electric" as const },
    { x: 210, y: 355, lit: null },
    { x: 390, y: 355, lit: null },
    { x: 570, y: 355, lit: "energy" as const },
    { x: 750, y: 355, lit: null },
  ];
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] w-full opacity-70"
      viewBox="0 0 960 420"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="heroFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2F7BFF" stopOpacity="0" />
          <stop offset="100%" stopColor="#2F7BFF" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      {cells.map((c, i) => {
        const color = c.lit === "energy" ? "#25E0A0" : c.lit === "electric" ? "#2F7BFF" : "rgba(255,255,255,0.28)";
        return (
          <g key={i}>
            <polygon points={hexPoints(c.x, c.y, 46)} fill="none" stroke={color} strokeWidth={c.lit ? 1.4 : 0.8} opacity={c.lit ? 0.9 : 0.4} />
            {c.lit && (
              <polygon points={hexPoints(c.x, c.y, 46)} fill={color} className="tile-lit" style={{ animationDelay: `${i * 0.4}s` }} opacity="0.16" />
            )}
          </g>
        );
      })}
      {/* energy trace running across illuminated tiles */}
      <polyline
        points="120,250 300,300 480,250 570,355 750,355 840,250"
        fill="none"
        stroke="#5AA0FF"
        strokeWidth="1.4"
        strokeLinejoin="round"
        className="flow-path"
        opacity="0.8"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* Photographic backdrop */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-floor.jpg"
          alt="Commuters walking across an illuminated hexagonal kinetic floor in a high-traffic concourse"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* legibility scrims */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="absolute inset-0 grid-texture opacity-40" />
      </div>

      <HexOverlay />

      {/* Content */}
      <div className="relative z-10 w-full pb-16 pt-28">
        <div className="shell">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-electric" aria-hidden />
              <span className="eyebrow text-paper-dim">{hero.eyebrow}</span>
            </div>

            <h1 className="font-display mt-6 text-balance text-[3.1rem] font-bold leading-[0.95] tracking-tightest sm:text-7xl lg:text-[5.6rem]">
              <span className="block">{hero.title[0]}</span>
              <span className="block text-electric-bright">{hero.title[1]}</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper-dim sm:text-xl">
              {hero.sub}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={hero.ctaPrimary.href}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
              >
                {hero.ctaPrimary.label}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href={hero.ctaSecondary.href}
                className="inline-flex items-center justify-center rounded-full border border-hairline bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-paper/40"
              >
                {hero.ctaSecondary.label}
              </a>
            </div>

            <FlowStrip />

            <p className="mono mt-10 text-xs uppercase tracking-[0.18em] text-muted">
              {brand.microStatement}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
