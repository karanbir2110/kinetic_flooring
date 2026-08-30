import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { roadmap } from "@/lib/content";

export default function Roadmap() {
  return (
    <Section id="roadmap">
      <SectionHeading eyebrow={roadmap.eyebrow} title={roadmap.title} />

      <div className="relative mt-16">
        {/* connecting line */}
        <span
          className="absolute left-0 right-0 top-[18px] hidden h-px bg-gradient-to-r from-electric via-electric/40 to-energy lg:block"
          aria-hidden
        />
        <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
          {roadmap.steps.map((step, i) => (
            <Reveal as="li" key={step.id} delay={i * 100} className="relative">
              <div className="flex items-center gap-4 lg:block">
                <span className="relative z-10 flex h-9 w-9 flex-none items-center justify-center rounded-full border border-electric/50 bg-ink text-electric-bright">
                  <span className="mono text-xs">{step.id}</span>
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight lg:mt-6">{step.title}</h3>
              </div>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-paper-dim lg:pr-6">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
