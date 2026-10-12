import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#140A08",
          900: "#1A0D0A",
          800: "#22110D",
          700: "#2C1712",
          600: "#3A1F18",
        },
        paper: {
          DEFAULT: "#F7ECD8",
          dim: "#D9C6A5",
        },
        electric: {
          DEFAULT: "#E2672A",
          bright: "#F2994A",
          deep: "#B34A17",
        },
        energy: {
          DEFAULT: "#E0B04A",
          dim: "#9C7420",
        },
        muted: "#A8957F",
        hairline: "rgba(247,236,216,0.09)",
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
        glow: "0 0 0 1px rgba(226,103,42,0.35), 0 0 40px -8px rgba(226,103,42,0.45)",
        "glow-energy": "0 0 0 1px rgba(224,176,74,0.35), 0 0 34px -10px rgba(224,176,74,0.5)",
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
