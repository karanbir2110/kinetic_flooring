import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import { prototype } from "@/lib/content";

function Schematic() {
  const S = "#8FB6FF";
  const L = "#5AA0FF";
  return (
    <svg viewBox="0 0 640 360" className="w-full" role="img" aria-label="Prototype power-conversion circuit: three-phase generator, bridge rectifier, filter, LTC3703-5 synchronous buck converter and 12 volt storage">
      <defs>
        <marker id="dot" markerWidth="6" markerHeight="6" refX="3" refY="3">
          <circle cx="3" cy="3" r="2" fill={L} />
        </marker>
      </defs>

      {/* top rail */}
      <line x1="120" y1="70" x2="600" y2="70" stroke={S} strokeWidth="1.2" opacity="0.5" />
      <polyline points="120,70 600,70" fill="none" stroke={L} strokeWidth="1.6" className="flow-path" />
      {/* ground rail */}
      <line x1="120" y1="300" x2="560" y2="300" stroke={S} strokeWidth="1" opacity="0.35" />

      {/* 3-phase AC sources */}
      {[110, 175, 240].map((y, i) => (
        <g key={i}>
          <circle cx="52" cy={y} r="20" fill="none" stroke={S} strokeWidth="1.2" />
          <path d={`M42 ${y} q5 -9 10 0 t10 0`} fill="none" stroke={L} strokeWidth="1.2" />
          <text x="52" y={y + 34} textAnchor="middle" className="mono" fontSize="10" fill="#7C8698">
            V{i + 1}
          </text>
          <line x1="72" y1={y} x2="130" y2={y} stroke={S} strokeWidth="1" opacity="0.5" />
        </g>
      ))}
      <text x="52" y="80" textAnchor="middle" className="mono" fontSize="9" fill="#5AA0FF">3-PHASE</text>

      {/* rectifier block */}
      <rect x="150" y="95" width="90" height="160" rx="4" fill="rgba(47,123,255,0.05)" stroke={S} strokeWidth="1" />
      {[[195, 130], [220, 175], [170, 175], [195, 220]].map(([x, y], i) => (
        <polygon key={i} points={`${x - 8},${y - 6} ${x - 8},${y + 6} ${x + 6},${y}`} fill="none" stroke={L} strokeWidth="1.1" />
      ))}
      <text x="195" y="272" textAnchor="middle" className="mono" fontSize="9" fill="#7C8698">D1–D6</text>
      <line x1="240" y1="130" x2="300" y2="130" stroke={S} strokeWidth="1" opacity="0.5" />
      <line x1="195" y1="95" x2="195" y2="70" stroke={S} strokeWidth="1" opacity="0.5" />
      <line x1="195" y1="255" x2="195" y2="300" stroke={S} strokeWidth="1" opacity="0.4" />

      {/* filter cap C1 */}
      <g>
        <line x1="300" y1="70" x2="300" y2="120" stroke={S} strokeWidth="1" opacity="0.5" />
        <line x1="288" y1="122" x2="312" y2="122" stroke={L} strokeWidth="1.4" />
        <line x1="290" y1="130" x2="310" y2="130" stroke={L} strokeWidth="1.4" />
        <line x1="300" y1="130" x2="300" y2="300" stroke={S} strokeWidth="1" opacity="0.35" />
        <text x="322" y="128" className="mono" fontSize="10" fill="#7C8698">C1 · 470µF</text>
      </g>

      {/* buck converter block */}
      <rect x="360" y="95" width="150" height="130" rx="4" fill="rgba(37,224,160,0.05)" stroke={S} strokeWidth="1" />
      <text x="435" y="114" textAnchor="middle" className="mono" fontSize="10" fill="#5AA0FF">LTC3703-5</text>
      {/* MOSFETs */}
      <rect x="378" y="130" width="22" height="22" rx="2" fill="none" stroke={L} strokeWidth="1" />
      <text x="389" y="166" textAnchor="middle" className="mono" fontSize="8" fill="#7C8698">M1</text>
      <rect x="378" y="175" width="22" height="22" rx="2" fill="none" stroke={L} strokeWidth="1" />
      <text x="389" y="210" textAnchor="middle" className="mono" fontSize="8" fill="#7C8698">M2</text>
      {/* inductor coil */}
      <path d="M420 150 q6 -10 12 0 q6 -10 12 0 q6 -10 12 0" fill="none" stroke="#25E0A0" strokeWidth="1.4" />
      <text x="450" y="140" textAnchor="middle" className="mono" fontSize="8" fill="#7C8698">L1 · 33µH</text>
      <line x1="470" y1="150" x2="510" y2="150" stroke={S} strokeWidth="1" opacity="0.5" />
      <line x1="360" y1="150" x2="300" y2="150" stroke={S} strokeWidth="1" opacity="0" />

      {/* output to battery */}
      <line x1="510" y1="150" x2="560" y2="150" stroke={S} strokeWidth="1" opacity="0.5" />
      <line x1="560" y1="150" x2="560" y2="180" stroke={S} strokeWidth="1" opacity="0.5" />
      <g stroke="#25E0A0" strokeWidth="1.6">
        <line x1="548" y1="188" x2="572" y2="188" />
        <line x1="554" y1="196" x2="566" y2="196" />
        <line x1="548" y1="204" x2="572" y2="204" />
        <line x1="556" y1="212" x2="564" y2="212" />
      </g>
      <text x="560" y="234" textAnchor="middle" className="mono" fontSize="10" fill="#25E0A0">12 V</text>
      <line x1="560" y1="212" x2="560" y2="300" stroke={S} strokeWidth="1" opacity="0.35" />

      {/* moving energy pulse */}
      <circle r="3.5" fill="#5AA0FF" className="pulse-dot">
        <animateMotion dur="4s" repeatCount="indefinite" path="M120,70 L600,70 L600,150" />
      </circle>
    </svg>
  );
}

export default function Prototype() {
  return (
    <Section id="prototype">
      <SectionHeading eyebrow={prototype.eyebrow} title={prototype.title} lead={prototype.lead} />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal className="rounded-2xl border border-hairline bg-ink-900 p-6 sm:p-8">
          <div className="mb-5 flex items-center justify-between">
            <span className="mono text-xs uppercase tracking-[0.16em] text-electric-bright">Prototype circuit architecture</span>
            <span className="mono text-[10px] uppercase tracking-[0.16em] text-muted">LTspice-modelled</span>
          </div>
          <Schematic />
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal className="rounded-2xl border border-hairline bg-ink-900 p-6">
            <span className="mono text-xs uppercase tracking-[0.16em] text-muted">Power chain</span>
            <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2">
              {prototype.chain.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="mono text-xs uppercase tracking-[0.1em] text-paper">{step}</span>
                  {i < prototype.chain.length - 1 && <span className="text-electric" aria-hidden>→</span>}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={90} className="rounded-2xl border border-hairline bg-ink-900 p-6">
            <span className="mono text-xs uppercase tracking-[0.16em] text-muted">Component reference</span>
            <ul className="mt-4 divide-y divide-hairline">
              {prototype.components.map((c) => (
                <li key={c.ref} className="flex items-baseline gap-3 py-2.5">
                  <span className="mono w-16 flex-none text-xs text-electric-bright">{c.ref}</span>
                  <span className="flex-1">
                    <span className="text-sm font-medium text-paper">{c.part}</span>
                    <span className="block text-xs text-muted">{c.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* prototype / design parameters */}
      <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {prototype.params.map((p, i) => (
          <Reveal key={p.note} delay={(i % 4) * 70} className="bg-ink-900 p-7">
            <div className="font-display text-3xl font-bold tracking-tightest text-electric-bright sm:text-4xl">
              {p.value === "~3,300" ? <><span className="text-muted">~</span><CountUp to={3300} />{""}</> : p.value === "~50" ? <><span className="text-muted">~</span><CountUp to={50} /></> : p.value === "12" ? <CountUp to={12} /> : <span>{p.value}</span>}
            </div>
            <div className="mono mt-1 text-xs uppercase tracking-[0.14em] text-paper">{p.unit}</div>
            <p className="mt-3 text-xs leading-relaxed text-muted">{p.note}</p>
          </Reveal>
        ))}
      </div>

      {/* concept sketch + disclaimer */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="overflow-hidden rounded-2xl border border-hairline bg-ink-900">
          <div className="flex items-center justify-between border-b border-hairline px-5 py-3">
            <span className="mono text-xs uppercase tracking-[0.16em] text-muted">Concept sketch</span>
            <span className="mono text-[10px] uppercase tracking-[0.16em] text-electric-bright">Lab notebook</span>
          </div>
          <div className="relative aspect-[16/10]">
            <Image
              src="/assets/concept-sketch.jpg"
              alt="Hand-drawn concept sketch of the interconnected hexagonal kinetic tile network"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-top opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" aria-hidden />
          </div>
        </Reveal>

        <Reveal delay={90} className="flex items-center rounded-2xl border border-hairline bg-ink-900 p-8">
          <div>
            <h3 className="font-display text-lg font-semibold tracking-tight">Design-stage figures</h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-paper-dim">{prototype.disclaimer}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
