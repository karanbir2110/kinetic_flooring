import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { HexMarker } from "@/components/ui/Hex";
import { problem } from "@/lib/content";

export default function Problem() {
  return (
    // width="wide" gives this section more side space. Options: "default" | "wide" | "full"
    <Section id="problem" hairline={false} width="wide">
      {/* align="center" centers the eyebrow + heading; titleClassName sets the heading's line spacing */}
      <SectionHeading
        eyebrow={problem.eyebrow}
        title={problem.title}
        align="center"
        titleClassName="!leading-[1.25] sm:!leading-[1.5]"
      />

      <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {problem.cards.map((card, i) => (
          <Reveal
            key={card.id}
            delay={i * 90}
            className="group flex flex-col items-center gap-4 rounded-2xl border border-hairline bg-ink-900 p-6 text-center sm:gap-5 sm:p-8 transition-all duration-300 sm:hover:-translate-y-1 hover:border-electric/40 hover:bg-ink-800 hover:shadow-glow"
          >
            <HexMarker>{card.id}</HexMarker>

            <h3 className="font-display text-[1.375rem] font-semibold leading-tight tracking-tight sm:text-3xl">
              {card.title}
            </h3>

            <p className="font-display text-lg font-medium leading-snug text-electric-bright sm:text-xl">
              {card.tagline}
            </p>

            <p className="text-base leading-relaxed text-paper-dim sm:text-xl">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}