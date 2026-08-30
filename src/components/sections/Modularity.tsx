import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import { hexPoints } from "@/components/ui/Hex";
import { modularity } from "@/lib/content";

function Honeycomb() {
  const r = 24;
  const dx = r * 1.5;
  const dy = r * Math.sqrt(3);
  const cols = 12;
  const rows = 5;
  const cells: { x: number; y: number; lit: boolean; delay: number }[] = [];
  let idx = 0;
  for (let c = 0; c < cols; c++) {
    for (let row = 0; row < rows; row++) {
      const x = 40 + c * dx;
      const y = 44 + row * dy + (c % 2 ? dy / 2 : 0);
      // light more tiles toward the left→right to suggest a growing network
      const lit = (c + row * 2) % 3 === 0 && c < 11;
      cells.push({ x, y, lit, delay: (idx % 14) * 0.22 });
      idx++;
    }
  }
  return (
    <svg viewBox="0 0 480 300" className="w-full" role="img" aria-label="A honeycomb grid of kinetic tiles activating across a floor">
      {cells.map((cell, i) => (
        <g key={i}>
          <polygon
            points={hexPoints(cell.x, cell.y, r - 2)}
            fill="none"
            stroke={cell.lit ? "#2F7BFF" : "rgba(255,255,255,0.16)"}
            strokeWidth={cell.lit ? 1.2 : 0.7}
          />
          {cell.lit && (
            <polygon
              points={hexPoints(cell.x, cell.y, r - 2)}
              fill={i % 5 === 0 ? "#25E0A0" : "#2F7BFF"}
              className="tile-lit"
              style={{ animationDelay: `${cell.delay}s` }}
              opacity="0.18"
            />
          )}
        </g>
      ))}
    </svg>
  );
}

export default function Modularity() {
  return (
    <Section id="modularity">
      <SectionHeading eyebrow={modularity.eyebrow} title={modularity.title} lead={modularity.lead} />

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <Reveal className="overflow-hidden rounded-2xl border border-hairline bg-ink-900 p-6">
          <Honeycomb />
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {modularity.steps.map((step, i) => {
            const numeric = /^\d+$/.test(step.count);
            return (
              <Reveal
                key={step.unit}
                delay={i * 90}
                className="rounded-xl border border-hairline bg-ink-900 p-6"
              >
                <div className="font-display text-4xl font-bold tracking-tightest text-paper sm:text-5xl">
                  {numeric ? (
                    <CountUp to={parseInt(step.count, 10)} />
                  ) : step.count === "100+" ? (
                    <>
                      <CountUp to={100} />+
                    </>
                  ) : (
                    <span className="text-electric-bright">{step.count}</span>
                  )}
                </div>
                <div className="mono mt-1 text-xs uppercase tracking-[0.16em] text-muted">{step.unit}</div>
                <p className="mt-3 text-sm leading-relaxed text-paper-dim">{step.note}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
