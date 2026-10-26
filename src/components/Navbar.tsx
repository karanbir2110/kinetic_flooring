"use client";

import { useEffect, useState } from "react";
import { nav, brand } from "@/lib/content";
import { hexPoints } from "@/components/ui/Hex";

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5 sm:gap-3" aria-label={`${brand.name} home`}>
      <svg viewBox="0 0 32 32" className="h-8 w-8 sm:h-10 sm:w-10" aria-hidden>
        <polygon points={hexPoints(16, 16, 14)} fill="none" stroke="rgb(var(--c-electric))" strokeWidth="1.5" />
        <polygon points={hexPoints(16, 16, 7)} fill="rgb(var(--c-electric))" className="opacity-80 transition-opacity group-hover:opacity-100" />
      </svg>
      <span className="font-display text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
        {brand.name}
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu with Escape and when the screen grows to desktop size
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        scrolled || open
          ? "border-b border-hairline bg-ink/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14 sm:h-[4.25rem]" : "h-16 sm:h-24"
          }`}
        >
          <Logo />

          <nav className="hidden items-center gap-6 lg:flex xl:gap-9" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mono text-[0.9375rem] uppercase tracking-[0.12em] text-paper-dim transition-colors hover:text-paper xl:text-[1.0625rem]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-electric/50 bg-electric/10 px-5 py-2.5 text-base lg:px-7 lg:py-3 lg:text-lg font-medium text-paper transition-colors hover:bg-electric/20 sm:inline-block"
            >
              Partner with us
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-md border border-hairline active:bg-electric/10 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className="relative block h-4 w-5">
                <span className={`absolute left-0 h-px w-5 bg-paper transition-all ${open ? "top-2 rotate-45" : "top-0.5"}`} />
                <span className={`absolute left-0 top-2 h-px w-5 bg-paper transition-all ${open ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute left-0 h-px w-5 bg-paper transition-all ${open ? "top-2 -rotate-45" : "top-[13px]"}`} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-hairline bg-ink/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[80vh] overflow-y-auto" : "max-h-0"
        }`}
      >
        <nav className="shell flex flex-col gap-1 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="mono flex min-h-12 items-center border-b border-hairline py-3 text-base uppercase tracking-[0.14em] text-paper-dim active:text-paper"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-electric px-5 py-3.5 text-center text-base font-semibold text-onaccent"
          >
            Partner with us
          </a>
        </nav>
      </div>
    </header>
  );
}