import { hexPoints } from "@/components/ui/Hex";
import { brand, footer } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline bg-ink-900">
      <div className="shell py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
                <polygon points={hexPoints(16, 16, 14)} fill="none" stroke="#2F7BFF" strokeWidth="1.5" />
                <polygon points={hexPoints(16, 16, 7)} fill="#2F7BFF" opacity="0.8" />
              </svg>
              <span className="font-display text-lg font-semibold tracking-tight">{brand.name}</span>
            </div>
            <p className="mono mt-4 text-xs uppercase tracking-[0.16em] text-muted">{brand.footerLine}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-10 gap-y-3">
            {footer.columns.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="mono text-xs uppercase tracking-[0.14em] text-paper-dim transition-colors hover:text-paper"
              >
                {c.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-hairline pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {brand.name} · {brand.tagline}</span>
          <span className="mono tracking-[0.14em]">Prototype-stage figures shown for engineering context.</span>
        </div>
      </div>
    </footer>
  );
}
