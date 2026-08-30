import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#080A0F",
          900: "#0A0D13",
          800: "#0E121A",
          700: "#141924",
          600: "#1B2230",
        },
        paper: {
          DEFAULT: "#F4F6FA",
          dim: "#C8D0DE",
        },
        electric: {
          DEFAULT: "#2F7BFF",
          bright: "#5AA0FF",
          deep: "#1750C7",
        },
        energy: {
          DEFAULT: "#25E0A0",
          dim: "#0F8F66",
        },
        muted: "#7C8698",
        hairline: "rgba(255,255,255,0.09)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "IBM Plex Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        eyebrow: "0.22em",
      },
      maxWidth: {
        shell: "1240px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(47,123,255,0.35), 0 0 40px -8px rgba(47,123,255,0.45)",
        "glow-energy": "0 0 0 1px rgba(37,224,160,0.35), 0 0 34px -10px rgba(37,224,160,0.5)",
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
