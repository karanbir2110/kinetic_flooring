import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { hexPoints } from "@/components/ui/Hex";
import { applications } from "@/lib/content";

export default function Applications() {
  return (
    <Section id="applications" width="wide">
      <SectionHeading
        eyebrow={applications.eyebrow}
        title={applications.title}
        align="center"
        // line spacing for the heading (tailwind later class wins) – raise/lower the number to taste
        titleClassName="!leading-[1.25] sm:!leading-[1.5]"
      />

      <div className="mt-10 grid gap-px sm:mt-16 overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {applications.cards.map((card, i) => (
          <Reveal
            key={card.name}
            delay={(i % 4) * 70}
            className="group relative flex min-h-0 flex-col justify-between gap-5 bg-ink-900 p-6 sm:min-h-[15.5rem] sm:gap-8 sm:p-9 transition-colors hover:bg-ink-800"
          >
            <svg viewBox="0 0 40 40" className="h-9 w-9 sm:h-11 sm:w-11" aria-hidden>
              <polygon
                points={hexPoints(20, 20, 17)}
                fill="none"
                stroke="rgb(var(--c-paper) / 0.25)"
                strokeWidth="1"
                className="transition-all duration-300 group-hover:stroke-electric"
              />
              <polygon
                points={hexPoints(20, 20, 9)}
                fill="rgb(var(--c-electric))"
                opacity="0"
                className="transition-opacity duration-300 group-hover:opacity-70"
              />
            </svg>
            <div>
              <h3 className="font-display text-[1.375rem] font-semibold leading-tight tracking-tight sm:text-[1.65rem]">
                {card.name}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-paper-dim sm:mt-3 sm:text-lg">{card.use}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}