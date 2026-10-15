import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

/**
 * Highlights strip — sits between the hero and "What KARM Offers".
 * Edit the text below to change the content.
 */

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-7 w-7",
  "aria-hidden": true,
};

const highlights: { title: string; body: string; badge: ReactNode }[] = [
  {
    title: "Power from People",
    body: "Every step becomes electricity. Renewable power, made where people move.",
    // lightning bolt
    badge: (
      <svg {...iconProps}>
        <path d="M13 2.5 5 13.5h6l-1 8 8-11h-6l1-8z" />
      </svg>
    ),
  },
  {
    // The number goes inside the circular badge
    title: "kg of CO₂ avoided",
    body: "per kWh of grid power replaced.",
    badge: <span className="font-display text-xl font-bold leading-none tracking-tight">0.71</span>,
  },
  {
    title: "Sustainability, Experienced",
    body: "A renewable future people can LIVE.",
    // leaf
    badge: (
      <svg {...iconProps}>
        <path d="M20 4C10 4 4.5 9.5 4.5 16.5c0 1.2.2 2.2.6 3 .9.4 1.9.5 3 .5C15 20 20 14 20 4z" />
        <path d="M5 20c2.5-5.5 5.5-9 10-12" />
      </svg>
    ),
  },
  {
    title: "INVITE.ENGAGE.CONNECT",
    body: "Every step becomes a moment with your brand.",
    // two linked circles
    badge: (
      <svg {...iconProps}>
        <circle cx="9" cy="12" r="5" />
        <circle cx="15" cy="12" r="5" />
      </svg>
    ),
  },
];

/** Lets long dotted titles (INVITE.ENGAGE.CONNECT) wrap after each full stop instead of overflowing. */
function withBreaks(text: string): ReactNode {
  const parts = text.split(/(?<=\.)/);
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && <wbr />}
    </span>
  ));
}

export default function Highlights() {
  return (
    <section aria-label="Highlights" className="relative py-14 sm:py-16">
      <div className="shell">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 90}
              className="flex min-w-0 flex-col items-center gap-4 bg-ink-900 px-6 py-9 text-center"
            >
              {/* circular badge */}
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-electric/60 bg-electric/10 text-electric-bright">
                {item.badge}
              </span>
              <h3 className="font-display break-words text-xl font-semibold leading-tight tracking-tight">{withBreaks(item.title)}</h3>
              <p className="max-w-[16rem] text-[0.95rem] leading-relaxed text-paper-dim">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}