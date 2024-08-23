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
      },
    },
    extend: {
      colors: {
        background: "#0e233a",
        surface: "#233442",
        overlay: "#374855",
        muted: "#b8b8b8",
        subtle: "#e0e0e0",
        fg: "#f5f5f5",
        accent: "#476c8d",
        "accent-fg": "#ffffff",
        primary: "#81a7b4",
        "primary-fg": "#0a1315",
        secondary: "#db503d",
        "secondary-fg": "#27100e",
        destructive: "#b30000",
        "destructive-fg": "#ebbab8",
        border: "#233442",
      },
    },
  },
  plugins: [],
};
