import Image from "next/image";
import { hero } from "@/lib/content";

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
          <div className="flex items-center gap-4">
            <span className="inline-block h-px w-10 bg-electric" aria-hidden />
            <span className="eyebrow text-paper-dim">{hero.eyebrow}</span>
            <span className="inline-block h-px w-10 bg-electric" aria-hidden />
          </div>

          {/* Title: stacked on phones, ONE line from the "sm" breakpoint up.
              The font size scales with the screen width (clamp) so it always fits. */}
          <h1 className="font-display mt-8 font-bold leading-[1.02] tracking-tightest text-[length:clamp(1.7rem,8.6vw,2.6rem)] sm:whitespace-nowrap sm:text-[length:clamp(2rem,4.7vw,4rem)]">
            <span className="block whitespace-nowrap sm:inline">{hero.title[0]}</span>
            <span className="block whitespace-nowrap text-electric-bright sm:inline">{hero.title[1]}</span>
          </h1>

          <div className="max-w-4xl">
            <p className="mt-9 max-w-2xl text-xl leading-relaxed text-paper-dim sm:text-2xl">
              {hero.sub}
            </p>

            <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={hero.ctaPrimary.href}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-electric px-9 py-4 text-base font-semibold text-onaccent shadow-glow transition-transform hover:-translate-y-0.5"
              >
                {hero.ctaPrimary.label}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href={hero.ctaSecondary.href}
                className="inline-flex items-center justify-center rounded-full border border-hairline bg-paper/[0.05] px-9 py-4 text-base font-semibold text-paper transition-colors hover:border-paper/40"
              >
                {hero.ctaSecondary.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}