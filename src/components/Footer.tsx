import { hexPoints } from "@/components/ui/Hex";
import { brand, footer } from "@/lib/content";

// Contact email shown in the footer
const CONTACT_EMAIL = "geetnagpal03752@gmail.com";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline bg-ink-900">
      <div className="shell py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 32 32" className="h-9 w-9" aria-hidden>
                <polygon points={hexPoints(16, 16, 14)} fill="none" stroke="rgb(var(--c-electric))" strokeWidth="1.5" />
                <polygon points={hexPoints(16, 16, 7)} fill="rgb(var(--c-electric))" opacity="0.8" />
              </svg>
              <span className="font-display text-3xl font-semibold tracking-tight">{brand.name}</span>
            </div>
            <p className="mono mt-5 text-sm uppercase leading-relaxed tracking-[0.14em] text-muted sm:text-base">{brand.footerLine}</p>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-6 inline-flex items-center gap-3 break-all text-lg text-paper-dim transition-colors hover:text-electric-bright"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3.5 6.5 12 13l8.5-6.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {CONTACT_EMAIL}
            </a>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-10 gap-y-4">
            {footer.columns.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="mono text-sm uppercase tracking-[0.14em] text-paper-dim transition-colors hover:text-paper sm:text-base"
              >
                {c.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-hairline pt-6 text-sm text-muted sm:text-base sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {brand.name} · {brand.tagline}</span>
          <span className="mono tracking-[0.14em]">Prototype-stage figures shown for engineering context.</span>
        </div>
      </div>
    </footer>
  );
}