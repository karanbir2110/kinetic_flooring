import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { engineering } from "@/lib/content";

export default function Engineering() {
  return (
    <Section id="engineering">
      <SectionHeading eyebrow={engineering.eyebrow} title={engineering.title} lead={engineering.lead} />

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {engineering.domains.map((d, i) => (
          <Reveal
            key={d.key}
            delay={(i % 2) * 90}
            className="rounded-2xl border border-hairline bg-ink-900 p-8"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold tracking-tight text-paper">{d.key}</h3>
              <span className="mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {String(i + 1).padStart(2, "0")} / 04
              </span>
            </div>
            <div className="mt-5 h-px w-full bg-hairline" />
            <ul className="mt-5 space-y-3">
              {d.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.95rem] text-paper-dim">
                  <svg viewBox="0 0 12 12" className="mt-1.5 h-2.5 w-2.5 flex-none" aria-hidden>
                    <polygon
                      points="6,0.5 11,3.25 11,8.75 6,11.5 1,8.75 1,3.25"
                      fill="none"
                      stroke="#2F7BFF"
                      strokeWidth="1"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6 flex flex-col gap-4 rounded-2xl border border-electric/25 bg-electric/[0.06] p-7 sm:flex-row sm:items-center">
        <span className="mono flex-none rounded-md border border-electric/40 px-3 py-1 text-xs uppercase tracking-[0.16em] text-electric-bright">
          Monitoring · INA219
        </span>
        <p className="text-[0.95rem] leading-relaxed text-paper-dim">{engineering.monitoringNote}</p>
      </Reveal>
    </Section>
  );
}
