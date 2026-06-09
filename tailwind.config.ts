import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#03080b",
          900: "#071116",
          850: "#0a171d",
          800: "#0e2028"
        },
        xoris: {
          cyan: "#15d7df",
          teal: "#16a7ae"
        }
      },
      boxShadow: {
        glow: "0 0 42px rgba(21, 215, 223, 0.18)",
        panel: "0 24px 90px rgba(0, 0, 0, 0.38)"
      },
      backgroundImage: {
        "radial-signal": "radial-gradient(circle at 50% 0%, rgba(21, 215, 223, 0.16), transparent 38%)"
      }
    }
  },
  plugins: []
};

export default config;
