import type { ReactNode } from "react";
import Reveal from "./Reveal";

export function Section({
  id,
  children,
  className = "",
  hairline = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  /** show the top hairline divider (hidden for sections after a full-bleed block) */
  hairline?: boolean;
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-28 lg:py-36 ${className}`}>
      <div className="shell">
        {hairline && <div className="hairline-t mb-16" aria-hidden />}
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-block h-px w-8 bg-electric/70" aria-hidden />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={`${align === "center" ? "mx-auto text-center items-center" : ""} flex flex-col ${className}`}
    >
      <div className={align === "center" ? "flex justify-center" : ""}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 className="font-display mt-5 max-w-3xl text-balance text-3xl font-semibold leading-[1.05] tracking-tightest sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed text-paper-dim sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
