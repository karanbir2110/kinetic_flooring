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
        titleClassName="!leading-[1.5]"
      />

      {/*
        On large screens each card is a "subgrid" that shares 4 rows with its neighbours
        (marker / title / tagline / body). That keeps every tagline on the same line and
        every paragraph on the same line, even when a title wraps to 2-3 lines.
        Below lg the cards simply stack as normal.
      */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
        {problem.cards.map((card, i) => (
          <Reveal
            key={card.id}
            delay={i * 90}
            className="group flex flex-col items-center gap-5 rounded-2xl border border-hairline bg-ink-900 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 hover:bg-ink-800 hover:shadow-glow lg:row-span-4 lg:grid lg:items-start lg:justify-items-center lg:gap-y-5 lg:[grid-template-rows:subgrid]"
          >
            <HexMarker>{card.id}</HexMarker>

            <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              {card.title}
            </h3>

            <p className="font-display text-xl font-medium leading-snug text-electric-bright">
              {card.tagline}
            </p>

            <p className="text-lg leading-relaxed text-paper-dim">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}