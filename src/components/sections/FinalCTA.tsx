import Reveal from "@/components/ui/Reveal";
import { finalCta } from "@/lib/content";
import PartnerForm from "./PartnerForm";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-36 lg:py-44">
      {/* ambient glow backdrop (hexagons removed) */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <radialGradient id="ctaGlow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="rgb(var(--c-electric))" stopOpacity="0.35" />
            <stop offset="100%" stopColor="rgb(var(--c-electric))" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1200" height="500" fill="url(#ctaGlow)" />
      </svg>

      <div className="shell relative z-10">
        <Reveal className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-balance text-[2.25rem] font-bold leading-[1.2] tracking-tightest sm:text-6xl sm:leading-[1.25] lg:text-[5rem]">
            <span className="block">{finalCta.title[0]}</span>
            <span className="block text-electric-bright">{finalCta.title[1]}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-paper-dim sm:mt-9 sm:text-2xl">
            {finalCta.body}
          </p>
          <PartnerForm />

          <p className="mt-8 text-base text-muted sm:text-lg">
            Prefer email?{" "}
            <a href={finalCta.ctaSecondary.href} className="text-paper-dim underline underline-offset-4 hover:text-paper">
              {finalCta.ctaSecondary.label}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}