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
          className="object-cover object-left"
        />
        {/* legibility scrims */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="absolute inset-0 grid-texture opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pb-20 pt-32">
        {/* ↑ left padding increased to nudge content right ↑ */}
        <div className="mx-auto w-full max-w-[90rem] pl-8 pr-6 sm:pl-12 md:pl-16 lg:pl-24">
          <div className="flex items-center gap-4">
            <span className="inline-block h-px w-12 bg-electric" aria-hidden />
            <span className="eyebrow !text-[length:clamp(1.1rem,1.8vw,1.4rem)] text-paper-dim">{hero.eyebrow}</span>
            <span className="inline-block h-px w-12 bg-electric" aria-hidden />
          </div>

          <h1 className="font-display mt-9 font-bold leading-[1.02] tracking-tightest text-[length:clamp(1.8rem,9vw,2.8rem)] sm:whitespace-nowrap sm:text-[length:clamp(2rem,4.9vw,4.4rem)]">
            <span className="block whitespace-nowrap sm:inline">{hero.title[0]}</span>
            <span className="block whitespace-nowrap text-electric-bright sm:inline">{hero.title[1]}</span>
          </h1>

          <div className="max-w-5xl">
            <p className="mt-10 max-w-3xl text-[1.3125rem] leading-relaxed text-paper-dim sm:text-[1.5625rem]">
              {hero.sub}
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={hero.ctaPrimary.href}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-electric px-10 py-5 text-lg font-semibold text-onaccent shadow-glow transition-transform hover:-translate-y-0.5"
              >
                {hero.ctaPrimary.label}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href={hero.ctaSecondary.href}
                className="inline-flex items-center justify-center rounded-full border border-hairline bg-paper/[0.05] px-10 py-5 text-lg font-semibold text-paper transition-colors hover:border-paper/40"
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