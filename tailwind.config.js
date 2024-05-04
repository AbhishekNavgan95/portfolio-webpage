/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#111111",
        dark: "#0000008f",
        accent: "#a5a5a5",
        "accent-medium" : "#d9d9d955",
        "accent-light": "#d9d9d955",
        "f-light": "#eeeeee"

      }
    },
  },
  plugins: [],
}