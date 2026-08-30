# Kinetic Flooring

Marketing / pitch website for **STRIDE**, a modular kinetic-flooring platform that
converts foot traffic into usable electrical energy while adding a distributed
sensing and energy-monitoring layer to high-traffic spaces.

Single-page scrolling site built as a production Next.js app.

## Stack

- **Next.js 14** (App Router) + **React 18**
- **TypeScript**
- **Tailwind CSS 3**
- Fonts: Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (data/labels)
- Animation: CSS + IntersectionObserver only (no heavy runtime deps), with full
  `prefers-reduced-motion` support.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start    # serve the production build
```

## Structure

```
src/
  app/
    layout.tsx        # metadata, fonts, SEO
    page.tsx          # section composition
    globals.css       # design system + animations
  components/
    Navbar.tsx, Footer.tsx
    sections/         # the 12 page sections
    ui/               # Reveal, CountUp, Section, Hex primitives
  lib/
    content.ts        # all copy + technical data (single source of truth)
public/
  assets/             # hero photo + concept sketch
source-material/      # original project docs & images (reference only)
```

## Content & technical accuracy

All copy and figures live in `src/lib/content.ts`. Technical values
(≈3,300 RPM, 8-pole/9-coil AFPM, ~50 W transient, 12 V storage, LTC3703-5 buck,
85–120 V RMS modelled input) are taken from the project's design/prototype
documentation and are labelled as **prototype / design-stage** values — not
guaranteed commercial specifications.

The engineering-validation schematic is a clean SVG reconstruction of the modelled
power-conversion chain (3-phase source → bridge rectifier → filter → LTC3703-5
synchronous buck → 12 V storage) using the component values from the design docs.
