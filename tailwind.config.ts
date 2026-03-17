import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0F",
        bg2: "#121218",
        bg3: "#1A1A24",
        bg4: "#22222E",
        purple: {
          DEFAULT: "#9B6DFF",
          lo: "#6B3FD4",
          hi: "#C4A4FF",
        },
        gold: {
          DEFAULT: "#F5C842",
          lo: "#B8920A",
        },
        teal: "#4ECDC4",
        rose: "#FF6B9D",
        brand: {
          white: "#F0EFF8",
          grey1: "#8B8AA0",
          grey2: "#3A3A4E",
          grey3: "#2A2A38",
        },
      },
      fontFamily: {
        head: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      borderRadius: {
        brand: "12px",
        "brand-lg": "20px",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #9B6DFF 0%, #F5C842 100%)",
        "gradient-purple": "linear-gradient(135deg, #9B6DFF 0%, #6B3FD4 100%)",
        "gradient-gold": "linear-gradient(135deg, #F5C842 0%, #B8920A 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
