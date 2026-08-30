import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { howItWorks } from "@/lib/content";

export default function HowItWorks() {
  return (
    <Section id="how">
      <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.title} />

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
        {howItWorks.steps.map((step, i) => (
          <Reveal
            key={step.id}
            delay={(i % 3) * 80}
            className="group relative flex flex-col gap-4 bg-ink-900 p-8 transition-colors hover:bg-ink-800"
          >
            <span
              aria-hidden
              className="absolute left-0 top-0 h-0.5 w-0 bg-electric transition-all duration-500 group-hover:w-full"
            />
            <div className="flex items-baseline justify-between">
              <span className="font-display text-4xl font-semibold tracking-tightest text-ink-600 transition-colors group-hover:text-electric">
                {step.id}
              </span>
              <span className="mono text-[10px] uppercase tracking-[0.2em] text-muted">Stage</span>
            </div>
            <h3 className="font-display text-xl font-semibold tracking-tight">{step.title}</h3>
            <p className="text-[0.95rem] leading-relaxed text-paper-dim">{step.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
