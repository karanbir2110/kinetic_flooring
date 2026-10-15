import Link from "next/link";
import { landing } from "@/lib/content";

export default function Landing() {
  return (
    <main
      id="landing-top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0 grid-texture opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-electric/10 via-ink to-ink" />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <div className="flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-electric" aria-hidden />
          <span className="eyebrow text-paper-dim">{landing.eyebrow}</span>
          <span className="inline-block h-px w-8 bg-electric" aria-hidden />
        </div>

        <p className="font-deva mt-6 text-3xl text-energy-dim" lang="sa">कर्म</p>

        <h1
          className="font-display mt-3 text-balance text-[2.6rem] font-bold leading-[1.05] tracking-tightest sm:text-6xl lg:text-[4.2rem]"
        >
          <span className="block">{landing.title[0]}</span>
          <span className="block text-electric-bright">{landing.title[1]}</span>
        </h1>

        <p
          className="mt-6 max-w-lg text-base leading-relaxed text-paper-dim sm:text-lg"
        >
          {landing.sub}
        </p>

        <div className="mt-10">
          <Link
            href={landing.cta.href}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-electric px-8 py-4 text-sm font-semibold text-onaccent shadow-glow transition-transform hover:-translate-y-0.5"
          >
            {landing.cta.label}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <p
          className="mono mt-14 text-xs uppercase tracking-[0.18em] text-muted"
        >
          {landing.hint}
        </p>
      </div>
    </main>
  );
}