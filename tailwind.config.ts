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
        navy: {
          900: "#111D2E",
          800: "#1B2D4F",
          700: "#22396A",
          600: "#2E4D80",
          500: "#3A6099",
          400: "#5A7DB3",
          300: "#8AAAD0",
          200: "#C2D4E8",
          100: "#E8F0F8",
        },
        cream: "#F5F6FA",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
