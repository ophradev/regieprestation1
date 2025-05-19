/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006B3F", // vert togolais
        secondary: "#FFCE00", // jaune togolais
        tertiary: "#D21034", // rouge togolais
        "togo-dark": "#333333",
        "togo-gray": "#666666",
        "togo-light": "#f8f9fa",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};