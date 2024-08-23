const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "1.75rem",
        md: "2rem",
        lg: "2.5rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
      },
      colors: {
        background: "rgb(var(--col-background) / <alpha-value>)",
        surface: "rgb(var(--col-surface) / <alpha-value>)",
        overlay: "rgb(var(--col-overlay) / <alpha-value>)",
        muted: "rgb(var(--col-muted) / <alpha-value>)",
        subtle: "rgb(var(--col-subtle) / <alpha-value>)",
        fg: "rgb(var(--col-fg) / <alpha-value>)",
        accent: {
          DEFAULT: "rgb(var(--col-accent) / <alpha-value>)",
          fg: "rgb(var(--col-accent-fg) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--col-primary) / <alpha-value>)",
          fg: "rgb(var(--col-primary-fg) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--col-secondary) / <alpha-value>)",
          fg: "rgb(var(--col-secondary-fg) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--col-destructive) / <alpha-value>)",
          fg: "rgb(var(--col-destructive-fg) / <alpha-value>)",
        },
        border: "rgb(var(--col-border) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
