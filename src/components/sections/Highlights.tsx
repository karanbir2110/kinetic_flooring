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
    body: "Renewable power, made where people move.",
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
    badge: (
      <span className="font-display text-xl font-bold leading-none tracking-tight">
        0.71
      </span>
    ),
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
    title: "Invite.Engage.Connect",
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

/**
 * Lets long dotted titles (INVITE.ENGAGE.CONNECT) wrap after each full stop
 * instead of overflowing on narrow columns / mid-size screens.
 */
function withBreaks(text: string): ReactNode {
  const parts = text.split(/(?<=\.)/);
  return parts.map((part, i) => (
    <span key={i} className="whitespace-nowrap">
      {part}
      {i < parts.length - 1 && <wbr />}
    </span>
  ));
}

export default function Highlights() {
  return (
    <section
      aria-label="Highlights"
      className="relative py-10 sm:py-12 lg:py-14"
    >
      <div className="shell">
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 90}
              className="flex min-w-0 flex-col items-center gap-4 px-2 py-2 text-center"
            >
              {/* circular badge */}
              <span
                aria-hidden
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-electric/60 bg-electric/10 text-electric-bright shadow-glow/40"
              >
                {item.badge}
              </span>

              <h3 className="font-display text-[length:clamp(1rem,1.6vw,1.125rem)] font-semibold leading-tight tracking-tight text-paper break-words">
                {withBreaks(item.title)}
              </h3>

              <p className="max-w-[16rem] text-[length:clamp(0.875rem,1.4vw,0.9375rem)] leading-snug text-paper-dim">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}