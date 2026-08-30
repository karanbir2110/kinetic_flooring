import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { solution } from "@/lib/content";

/* compact glyphs that echo each stage of the chain */
function Glyph({ i }: { i: number }) {
  const c = "#5AA0FF";
  const g = "#25E0A0";
  switch (i) {
    case 0: // footstep
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="none" stroke={c} strokeWidth="1.4">
          <path d="M8 3c2 0 3 2 3 5s-1 7-3 7-3-3-3-6 1-6 3-6Z" />
          <path d="M14 13c1.5 0 2.5 1 2.5 3s-1 3.5-2.5 3.5S12 18 12 16" />
        </svg>
      );
    case 2: // gear
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="none" stroke={c} strokeWidth="1.3">
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
        </svg>
      );
    case 4: // AC wave
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="none" stroke={c} strokeWidth="1.4">
          <path d="M2 12c2-6 4-6 6 0s4 6 6 0 4-6 6 0" />
        </svg>
      );
    case 5: // rectify — half wave
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="none" stroke={c} strokeWidth="1.4">
          <path d="M2 16c1.5-4 3-4 4.5 0M8 16c1.5-4 3-4 4.5 0M14 16c1.5-4 3-4 4.5 0" />
        </svg>
      );
    case 6: // DC line
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="none" stroke={c} strokeWidth="1.4">
          <path d="M2 14h6l0-4h8l0 4h-2" />
        </svg>
      );
    case 7: // battery
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="none" stroke={g} strokeWidth="1.4">
          <rect x="3" y="8" width="16" height="9" rx="1.5" />
          <path d="M21 11v3" />
          <rect x="5" y="10" width="8" height="5" rx="0.5" fill={g} opacity="0.5" stroke="none" />
        </svg>
      );
    default: // generic node (transmission, generator)
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="none" stroke={c} strokeWidth="1.4">
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="2.2" fill={c} stroke="none" />
        </svg>
      );
  }
}

export default function Solution() {
  return (
    <Section id="solution">
      <SectionHeading eyebrow={solution.eyebrow} title={solution.title} lead={solution.lead} />

      <div className="mt-14 overflow-hidden rounded-2xl border border-hairline bg-ink-900">
        <div className="flex items-center justify-between border-b border-hairline px-6 py-4">
          <span className="mono text-xs uppercase tracking-[0.18em] text-muted">Conversion chain</span>
          <span className="mono text-xs uppercase tracking-[0.18em] text-electric-bright">People → Power</span>
        </div>

        <ol className="relative px-6 py-8 sm:px-10">
          {/* animated spine */}
          <span
            className="absolute left-[38px] top-8 bottom-8 w-px bg-gradient-to-b from-electric via-electric/40 to-energy sm:left-[54px]"
            aria-hidden
          />
          {solution.stack.map((s, i) => (
            <Reveal
              as="li"
              key={s.label}
              delay={i * 60}
              className="relative flex items-start gap-5 py-3.5 pl-1"
            >
              <span className="relative z-10 mt-0.5 flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full border border-hairline bg-ink-800">
                <span className="mono text-[10px] text-muted">{String(i + 1).padStart(2, "0")}</span>
              </span>
              <span className="flex-none pt-0.5">
                <Glyph i={i} />
              </span>
              <div className="min-w-0">
                <p className="font-display text-base font-semibold leading-tight sm:text-lg">{s.label}</p>
                <p className="mt-0.5 text-sm text-paper-dim">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
