import Reveal from "@/components/ui/Reveal";
import { hexPoints } from "@/components/ui/Hex";
import { finalCta } from "@/lib/content";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36 lg:py-44">
      {/* ambient hex glow backdrop */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <radialGradient id="ctaGlow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#2F7BFF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2F7BFF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1200" height="500" fill="url(#ctaGlow)" />
        {[[240, 120], [980, 150], [180, 380], [1020, 400], [600, 470]].map(([x, y], i) => (
          <polygon
            key={i}
            points={hexPoints(x, y, 40)}
            fill="none"
            stroke={i % 2 ? "#25E0A0" : "#2F7BFF"}
            strokeWidth="1"
            opacity="0.4"
            className="tile-lit"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>

      <div className="shell relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-balance text-4xl font-bold leading-[0.98] tracking-tightest sm:text-6xl lg:text-7xl">
            <span className="block">{finalCta.title[0]}</span>
            <span className="block text-electric-bright">{finalCta.title[1]}</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-paper-dim sm:text-lg">
            {finalCta.body}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={finalCta.ctaPrimary.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-electric px-8 py-4 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              {finalCta.ctaPrimary.label}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={finalCta.ctaSecondary.href}
              className="inline-flex items-center justify-center rounded-full border border-hairline bg-white/[0.03] px-8 py-4 text-sm font-semibold text-paper transition-colors hover:border-paper/40"
            >
              {finalCta.ctaSecondary.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
