import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          DEFAULT: "#111111",
          light: "#2A2A2A",
          dark: "#000000",
        },
        eco: {
          DEFAULT: "#10B981",
          hover: "#059669",
          subtle: "#D1FAE5",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "32px",
        button: "9999px",
        input: "12px",
        hero: "40px",
      },
      minHeight: {
        hero: "600px",
        "hero-lg": "700px",
      },
      boxShadow: {
        soft: "0 20px 40px -10px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
