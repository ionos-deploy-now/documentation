export default {
  theme: {
    fontFamily: {
      sans: ["Overpass", "ui-sans-serif", "system-ui", "sans-serif"],
      mono: ["Overpass Mono", "monospace"],
    },
    extend: {
      screens: {
        xxl: "1400px",
      },
      colors: {
        ui: {
          background: "var(--color-ui-background)",
          sidebar: "var(--color-ui-sidebar)",
          typo: "var(--color-ui-typo)",
          primary: "#0b9dcc",
          secondary: "#2c3e50",
          border: "var(--color-ui-border)",
        },
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  scan: {
    dirs: ["./"],
    exclude: ["node_modules", ".git", "dist", ".cache", ".temp"],
  },
  preflight: {
    alias: {
      // add gridsome aliases
      "g-link": "a",
      "g-image": "img",
    },
  },
};
