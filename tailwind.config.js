/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: {
            50: "#f5f3ff",
            100: "#ede9fe",
            500: "#7c3aed",
            600: "#6d28d9",
            700: "#5b21b6",
            900: "#4c1d95",
          },
          teal: {
            400: "#2dd4bf",
            500: "#14b8a6",
            600: "#0d9488",
            700: "#0f766e",
          },
        },
      },
      fontFamily: {
        sans: [
          "DM Sans",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      maxWidth: {
        phone: "430px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(91, 33, 182, 0.08), 0 4px 14px rgba(20, 184, 166, 0.12)",
        nav: "0 -4px 24px rgba(91, 33, 182, 0.08)",
      },
    },
  },
  plugins: [],
};
