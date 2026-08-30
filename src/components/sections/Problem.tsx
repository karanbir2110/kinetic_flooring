import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { HexMarker } from "@/components/ui/Hex";
import { problem } from "@/lib/content";

export default function Problem() {
  return (
    <Section id="problem" hairline={false}>
      <SectionHeading eyebrow={problem.eyebrow} title={problem.title} lead={problem.lead} />

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-3">
        {problem.cards.map((card, i) => (
          <Reveal
            key={card.id}
            delay={i * 90}
            className="group flex flex-col gap-5 bg-ink-900 p-8 transition-colors hover:bg-ink-800"
          >
            <HexMarker>{card.id}</HexMarker>
            <h3 className="font-display text-xl font-semibold tracking-tight">{card.title}</h3>
            <p className="text-[0.975rem] leading-relaxed text-paper-dim">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
