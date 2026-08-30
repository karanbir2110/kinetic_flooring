import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { businessValue } from "@/lib/content";

const EQ = [
  { t: "Smart floor", accent: false },
  { t: "=", accent: false, op: true },
  { t: "Energy", accent: true },
  { t: "+", accent: false, op: true },
  { t: "Sensing", accent: true },
  { t: "+", accent: false, op: true },
  { t: "Data", accent: true },
  { t: "+", accent: false, op: true },
  { t: "Engagement", accent: true },
];

export default function BusinessValue() {
  return (
    <Section id="business">
      <SectionHeading eyebrow={businessValue.eyebrow} title={businessValue.title} lead={businessValue.lead} />

      <Reveal className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl border border-hairline bg-ink-900 px-6 py-6">
        {EQ.map((e, i) => (
          <span
            key={i}
            className={`font-display text-xl font-semibold tracking-tight sm:text-2xl ${
              e.op ? "text-muted" : e.accent ? "text-electric-bright" : "text-paper"
            }`}
          >
            {e.t}
          </span>
        ))}
      </Reveal>

      <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {businessValue.cards.map((card, i) => (
          <Reveal
            key={card.key}
            delay={(i % 4) * 80}
            className="group flex flex-col gap-4 bg-ink-900 p-7 transition-colors hover:bg-ink-800"
          >
            <span
              aria-hidden
              className="h-8 w-8 rounded-md border border-hairline transition-colors group-hover:border-electric/60"
              style={{ background: "linear-gradient(135deg, rgba(47,123,255,0.14), transparent)" }}
            />
            <h3 className="font-display text-lg font-semibold leading-tight tracking-tight">{card.key}</h3>
            <p className="text-sm leading-relaxed text-paper-dim">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
