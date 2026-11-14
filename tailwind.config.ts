import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--bg-canvas)",
        surface: {
          DEFAULT: "var(--bg-surface)",
          elevated: "var(--bg-surface-elevated)",
          glass: "var(--bg-surface-glass)",
        },
        border: {
          subtle: "var(--border-subtle)",
          highlight: "var(--border-highlight)",
          strong: "var(--border-strong)",
        },
        ink: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        accent: {
          DEFAULT: "var(--accent-primary)",
          copper: "var(--accent-secondary)",
          burnt: "var(--accent-tertiary)",
          status: "var(--accent-status)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.15rem, 6vw, 5.25rem)",
          { lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "600" },
        ],
        "display-lg": [
          "clamp(1.75rem, 4vw, 3.25rem)",
          { lineHeight: "1.06", letterSpacing: "-0.03em", fontWeight: "600" },
        ],
        "display-md": [
          "1.5rem",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
      },
      spacing: {
        "4.5": "1.125rem",
        "15": "3.75rem",
        "18": "4.5rem",
        "24": "6rem",
        "30": "7.5rem",
      },
      borderRadius: {
        terminal: "var(--radius-terminal)",
        bento: "var(--radius-bento)",
        pill: "9999px",
      },
      maxWidth: {
        portfolio: "1280px",
      },
      boxShadow: {
        bento:
          "0 1px 0 0 rgba(255, 255, 255, 0.07) inset, 0 20px 40px -15px rgba(0, 0, 0, 0.7)",
        "bento-hover":
          "0 1px 0 0 rgba(205, 134, 86, 0.35) inset, 0 24px 48px -12px rgba(168, 44, 21, 0.18)",
        dock: "0 1px 0 0 rgba(255, 255, 255, 0.1) inset, 0 16px 36px -8px rgba(0, 0, 0, 0.75)",
      },
      backgroundImage: {
        "dot-matrix":
          "radial-gradient(rgba(254, 254, 254, 0.07) 1px, transparent 1px)",
        "copper-glow":
          "radial-gradient(600px circle at 50% 0%, rgba(205, 134, 86, 0.13), rgba(168, 44, 21, 0.04) 45%, transparent 75%)",
      },
    },
  },
  plugins: [],
};

export default config;
