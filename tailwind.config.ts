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
        bg:    "#FDFCFA",
        bg2:   "#F8F5F0",
        bg3:   "#F1EDE6",
        bg4:   "#E9E3D9",
        purple: {
          DEFAULT: "#7B68EE",
          lo:      "#5A4FCC",
          hi:      "#A896FF",
        },
        gold: {
          DEFAULT: "#F0A500",
          lo:      "#C47A0A",
        },
        teal:  "#1AB8A8",
        rose:  "#F06B7A",
        brand: {
          text:  "#1A1728",
          grey1: "#7A7589",
          grey2: "#C8C4D4",
          grey3: "#EAE7F0",
        },
      },
      fontFamily: {
        head: ["var(--font-head)", "Playfair Display", "serif"],
        body: ["var(--font-body)", "DM Sans", "sans-serif"],
        mono: ["var(--font-mono)", "DM Mono", "monospace"],
      },
      borderRadius: {
        brand:    "12px",
        "brand-lg": "20px",
      },
    },
  },
  plugins: [],
};
export default config;
