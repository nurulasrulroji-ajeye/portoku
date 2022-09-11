/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Abril":['Abril Fatface',...defaultTheme.fontFamily.sans],
        "Rampart":['Rampart One',...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [require("daisyui")],
}
