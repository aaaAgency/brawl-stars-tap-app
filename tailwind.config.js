/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "grayButton": "0px 5px 2.2px 0px #655F86 inset, 0px 2px 2.5px 0px #000000CC"
      }
    },
    colors: {
      "white": "#FFFFFF",
      "black": "#000E2E",
      "green": "#CAFC25",
      "light-grey": "rgba(255, 255, 255, 0.7)",
    }
  },
  plugins: [],
}