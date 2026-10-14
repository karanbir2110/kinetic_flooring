import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // All colors are driven by CSS variables (see src/app/globals.css)
        // so the three color schemes can be swapped at runtime.
        ink: {
          DEFAULT: "rgb(var(--c-ink) / <alpha-value>)",
          900: "rgb(var(--c-ink-900) / <alpha-value>)",
          800: "rgb(var(--c-ink-800) / <alpha-value>)",
          700: "rgb(var(--c-ink-700) / <alpha-value>)",
          600: "rgb(var(--c-ink-600) / <alpha-value>)",
        },
        paper: {
          DEFAULT: "rgb(var(--c-paper) / <alpha-value>)",
          dim: "rgb(var(--c-paper-dim) / <alpha-value>)",
        },
        electric: {
          DEFAULT: "rgb(var(--c-electric) / <alpha-value>)",
          bright: "rgb(var(--c-electric-bright) / <alpha-value>)",
          deep: "rgb(var(--c-electric-deep) / <alpha-value>)",
        },
        energy: {
          DEFAULT: "rgb(var(--c-energy) / <alpha-value>)",
          dim: "rgb(var(--c-energy-dim) / <alpha-value>)",
        },
        onaccent: "rgb(var(--c-onaccent) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        hairline: "rgb(var(--c-paper) / 0.09)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "Tiro Devanagari Sanskrit", "Georgia", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "Mukta", "ui-sans-serif", "system-ui", "sans-serif"],
        deva: ["var(--font-deva)", "Tiro Devanagari Sanskrit", "serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.015em",
        eyebrow: "0.22em",
      },
      maxWidth: {
        shell: "1240px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgb(var(--c-electric) / 0.35), 0 0 40px -8px rgb(var(--c-electric) / 0.45)",
        "glow-energy": "0 0 0 1px rgb(var(--c-energy) / 0.35), 0 0 34px -10px rgb(var(--c-energy) / 0.5)",
      },
      keyframes: {
        pulseFlow: {
          "0%": { strokeDashoffset: "1000", opacity: "0" },
          "12%": { opacity: "1" },
          "88%": { opacity: "1" },
          "100%": { strokeDashoffset: "0", opacity: "0" },
        },
        floatSlow: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        floatSlow: "floatSlow 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
