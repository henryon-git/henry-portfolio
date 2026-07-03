import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A0F1E",
          light: "#0D1526",
          surface: "#1E2A4A",
        },
        mint: {
          DEFAULT: "#0FF4C6",
          dim: "#0BC99F",
          glow: "rgba(15,244,198,0.15)",
        },
        slate: {
          light: "#F0F4FF",
          muted: "#8892B0",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "cursor-blink": "blink 1s step-end infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 8px rgba(15,244,198,0.3)" },
          "50%": { boxShadow: "0 0 24px rgba(15,244,198,0.7)" },
        },
      },
      backgroundImage: {
        "dot-pattern":
          "radial-gradient(circle, rgba(15,244,198,0.12) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-md": "32px 32px",
      },
    },
  },
  plugins: [],
};
export default config;
