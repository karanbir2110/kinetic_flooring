import type { ReactNode } from "react";
import Reveal from "./Reveal";

export function Section({
  id,
  children,
  className = "",
  hairline = true,
  width = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  /** show the top hairline divider (hidden for sections after a full-bleed block) */
  hairline?: boolean;
  /** "default" = 1240px, "wide" = 1560px, "full" = edge to edge (keeps side padding) */
  width?: "default" | "wide" | "full";
}) {
  const shellClass =
    width === "wide"
      ? "shell shell-wide"
      : width === "full"
        ? "shell shell-full"
        : "shell";

  return (
    <section id={id} className={`relative py-16 sm:py-28 lg:py-36 ${className}`}>
      <div className={shellClass}>
        {hairline && <div className="hairline-t mb-10 sm:mb-16" aria-hidden />}
        {children}
      </div>
    </section>
  );
}

/**
 * Eyebrow — now identical to the hero's: dash on BOTH sides, same size.
 * Pass `className` for any one-off tweaks.
 */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  /** kept so existing <Eyebrow dashRight> calls still compile; dashes are always on both sides now */
  dashRight?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-3 sm:gap-4 ${className}`}>
      <span className="inline-block h-px w-6 shrink-0 bg-electric sm:w-12" aria-hidden />
      <span className="eyebrow text-balance text-center !text-[length:clamp(0.85rem,1.8vw,1.4rem)] text-paper-dim">
        {children}
      </span>
      <span className="inline-block h-px w-6 shrink-0 bg-electric sm:w-12" aria-hidden />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
  titleClassName = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  className?: string;
  /** extra classes for the <h2>, e.g. "leading-[1.3]" to change line spacing */
  titleClassName?: string;
}) {
  return (
    <Reveal
      className={`${align === "center" ? "mx-auto text-center items-center" : ""} flex flex-col ${className}`}
    >
      <div className={align === "center" ? "flex justify-center" : ""}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 className={`font-display mt-6 max-w-5xl text-balance text-[2rem] font-bold sm:mt-8 sm:text-5xl leading-[1.05] tracking-tightest lg:text-[3.5rem] ${titleClassName}`}>
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 max-w-3xl text-base leading-relaxed text-paper-dim sm:mt-6 sm:text-xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}