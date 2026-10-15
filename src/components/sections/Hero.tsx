import Image from "next/image";
import { hero, brand } from "@/lib/content";

function FlowStrip() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3">
      {hero.flow.map((step, i) => (
        <div key={step} className="flex items-center gap-3">
          <span className="mono text-xs uppercase tracking-[0.18em] text-paper">
            <span className="text-electric-bright">{String(i + 1).padStart(2, "0")}</span> {step}
          </span>
          {i < hero.flow.length - 1 && (
            <svg width="34" height="8" viewBox="0 0 34 8" aria-hidden className="text-electric-bright">
              <line x1="0" y1="4" x2="26" y2="4" stroke="currentColor" strokeWidth="1" />
              <path d="M26 1 L33 4 L26 7" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* Photographic backdrop */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-floor.jpgg"
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

      {/* Content */}
      <div className="relative z-10 w-full pb-16 pt-28">
        <div className="shell">
          <div className="flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-electric" aria-hidden />
            <span className="eyebrow text-paper-dim">{hero.eyebrow}</span>
            {/* NEW: matching dash on the right side */}
            <span className="inline-block h-px w-8 bg-electric" aria-hidden />
          </div>

          {/* Title: stacked on phones, ONE line from the "sm" breakpoint up.
              The font size scales with the screen width (clamp) so it always fits. */}
          <h1 className="font-display mt-6 font-bold leading-[1.02] tracking-tightest text-[length:clamp(1.6rem,8.4vw,2.4rem)] sm:whitespace-nowrap sm:text-[length:clamp(1.9rem,4.6vw,3.6rem)]">
            <span className="block whitespace-nowrap sm:inline">{hero.title[0]}</span>
            <span className="block whitespace-nowrap text-electric-bright sm:ml-[0.3em] sm:inline">{hero.title[1]}</span>
          </h1>

          <div className="max-w-3xl">
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper-dim sm:text-xl">
              {hero.sub}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={hero.ctaPrimary.href}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-onaccent shadow-glow transition-transform hover:-translate-y-0.5"
              >
                {hero.ctaPrimary.label}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href={hero.ctaSecondary.href}
                className="inline-flex items-center justify-center rounded-full border border-hairline bg-paper/[0.05] px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-paper/40"
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