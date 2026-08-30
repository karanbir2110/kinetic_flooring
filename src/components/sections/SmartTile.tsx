import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { hexPoints } from "@/components/ui/Hex";
import { smartTile } from "@/lib/content";

function ConcentricTile() {
  const cx = 130;
  const cy = 130;
  const rings = [
    { r: 118, color: "rgba(255,255,255,0.28)", label: smartTile.layers[0].key },
    { r: 82, color: "#2F7BFF", label: smartTile.layers[1].key },
    { r: 46, color: "#25E0A0", label: smartTile.layers[2].key },
  ];
  return (
    <svg viewBox="0 0 260 260" className="mx-auto w-full max-w-sm" role="img" aria-label="Concentric hexagonal tile with mechanical, electrical and data layers">
      {rings.map((ring, i) => (
        <g key={i}>
          <polygon points={hexPoints(cx, cy, ring.r)} fill="none" stroke={ring.color} strokeWidth="1.4" opacity={0.85} />
          <polygon points={hexPoints(cx, cy, ring.r)} fill={ring.color} opacity={i === 2 ? 0.14 : 0.05} />
        </g>
      ))}
      <circle cx={cx} cy={cy} r="4" fill="#25E0A0" className="pulse-dot" />
    </svg>
  );
}

export default function SmartTile() {
  return (
    <Section id="smart-tile">
      <SectionHeading eyebrow={smartTile.eyebrow} title={smartTile.title} lead={smartTile.lead} />

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative rounded-2xl border border-hairline bg-ink-900 p-8">
          <ConcentricTile />
          <ul className="mt-6 space-y-2">
            {smartTile.layers.map((l, i) => (
              <li key={l.key} className="flex items-center gap-3 text-sm">
                <span
                  className="h-2.5 w-2.5 flex-none rounded-sm"
                  style={{ background: i === 0 ? "rgba(255,255,255,0.4)" : i === 1 ? "#2F7BFF" : "#25E0A0" }}
                  aria-hidden
                />
                <span className="font-medium text-paper">{l.key}</span>
                <span className="text-muted">— {l.role}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="flex flex-col gap-4">
          {smartTile.dimensions.map((d, i) => (
            <Reveal
              key={d.key}
              delay={i * 90}
              className="rounded-xl border border-hairline bg-ink-900 p-6 transition-colors hover:border-electric/30"
            >
              <div className="flex items-center gap-3">
                <span className="mono text-xs uppercase tracking-[0.16em] text-electric-bright">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight">{d.key}</h3>
              </div>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-paper-dim">{d.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* signal chain */}
      <Reveal className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3 rounded-2xl border border-hairline bg-ink-900 px-6 py-5">
        {smartTile.chain.map((node, i) => (
          <span key={node} className="flex items-center gap-2">
            <span className="mono text-xs uppercase tracking-[0.14em] text-paper">{node}</span>
            {i < smartTile.chain.length - 1 && <span className="text-electric" aria-hidden>→</span>}
          </span>
        ))}
      </Reveal>
    </Section>
  );
}
