import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        // Homepage — dark walnut / gold
        home: {
          bg: "#2B1B10",
          text: "#F5EDE0",
          tag: "#D9C285",
          eyebrow: "#8A7256",
          divider: "#5A4A34",
          stance: "#B8965A",
          body: "#A79378",
          rule: "#3D2E1E",
          muted: "#6B5A44",
        },
        // Institute — parchment / navy / gold
        institute: {
          bg: "#F5F0E6",
          text: "#1A1A1A",
          accent: "#A98A4E",
          rule: "#1B2A4A",
          body: "#5C6470",
          footerRule: "#D8D3C8",
        },
        // Academy — cream / forest green / coral / sage
        academy: {
          bg: "#FDF6EC",
          text: "#2C4A3B",
          accent: "#B8965A",
          coral: "#E8927C",
          sage: "#9CAF88",
          border: "#E8D5B5",
          intro: "#6B5D4F",
          topics: "#8A7A63",
        },
        // Reignite the Spark — blush / plum / gold
        rts: {
          bg: "#F5EDE0",
          text: "#3D2B1F",
          rose: "#C9A0A0",
          gold: "#B8965A",
          sub: "#6B5D4F",
          card: "#2B2130",
          cardText: "#F5EDE0",
          cardBody: "#C9B8C4",
          itemBorder: "#DFD0B8",
        },
      },
    },
  },
  plugins: [],
};

export default config;
