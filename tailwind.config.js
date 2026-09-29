/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ["Figtree", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        ink: { 950: "#070B16", 900: "#0B1020", 800: "#111833", 700: "#1B2550", 600: "#2A3670" },
        signal: { DEFAULT: "#6EE7D0", dim: "#3CB9A3" },
        amber: { DEFAULT: "#F6C177" },
        muted: "#9AA5C4",
        paper: "#E7EBF7",
      },
    },
  },
  plugins: [],
};
