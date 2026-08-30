import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { hexPoints } from "@/components/ui/Hex";
import { applications } from "@/lib/content";

export default function Applications() {
  return (
    <Section id="applications">
      <SectionHeading eyebrow={applications.eyebrow} title={applications.title} />

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {applications.cards.map((card, i) => (
          <Reveal
            key={card.name}
            delay={(i % 4) * 70}
            className="group relative flex min-h-[190px] flex-col justify-between gap-6 bg-ink-900 p-7 transition-colors hover:bg-ink-800"
          >
            <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden>
              <polygon
                points={hexPoints(20, 20, 17)}
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1"
                className="transition-all duration-300 group-hover:stroke-[#2F7BFF]"
              />
              <polygon
                points={hexPoints(20, 20, 9)}
                fill="#2F7BFF"
                opacity="0"
                className="transition-opacity duration-300 group-hover:opacity-70"
              />
            </svg>
            <div>
              <h3 className="font-display text-lg font-semibold tracking-tight">{card.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper-dim">{card.use}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
