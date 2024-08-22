const { fontFamily } = require("tailwindcss/defaultTheme");
import type { Config } from "tailwindcss";

const config: Config = {
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
        background: "hsl(var(--col-background) / <alpha-value>)",
        surface: "hsl(var(--col-surface) / <alpha-value>)",
        overlay: "hsl(var(--col-overlay) / <alpha-value>)",
        muted: "hsl(var(--col-muted) / <alpha-value>)",
        subtle: "hsl(var(--col-subtle) / <alpha-value>)",
        fg: "hsl(var(--col-fg) / <alpha-value>)",
        accent: {
          DEFAULT: "hsl(var(--col-accent) / <alpha-value>)",
          fg: "hsl(var(--col-accent-fg) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--col-primary) / <alpha-value>)",
          fg: "hsl(var(--col-primary-fg) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--col-secondary) / <alpha-value>)",
          fg: "hsl(var(--col-secondary-fg) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--col-destructive) / <alpha-value>)",
          fg: "hsl(var(--col-destructive-fg) / <alpha-value>)",
        },
        border: "hsl(var(--col-border) / <alpha-value>)",
      },
    },
  }, plugins: [],
};
export default config;
