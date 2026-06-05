import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1D35",
          light: "#122744",
        },
        brand: {
          DEFAULT: "#1a4f9e",
          light: "#2563eb",
          pale: "#eaf1fc",
        },
        accent: {
          DEFAULT: "#16a34a",
          light: "#22c55e",
          pale: "#f0fdf4",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
      boxShadow: {
        card: "0 4px 16px rgba(11, 29, 53, 0.08)",
        "card-lg": "0 12px 40px rgba(11, 29, 53, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
