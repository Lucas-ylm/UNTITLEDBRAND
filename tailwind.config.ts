import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      dark: "#1e2327",
      light: "#f0efe4",
      montana: "#0f6667",
      illinois: "#18181b",
      louisiane: "#6e775b",
      capital: "#03133e",
      primary: "var(--primary-color)",
      current: "var(--current-color)",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["var(--font-sans)", "Helvetica", "Arial", "sans-serif"],
      serif: ["var(--font-serif)", "Georgia", "serif"],
    },
    extend: {
      screens: {
        xs: "374px",
      },
      width: {
        "100": "calc(100vw - 20px)",
      },
    },
  },
  plugins: [],
} satisfies Config;