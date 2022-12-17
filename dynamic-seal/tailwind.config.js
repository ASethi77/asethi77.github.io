const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [],
  theme: {
    extend: {
      // See https://github.com/jjranalli/nightwind#configuration
      colors: {
        foreground: { 
          50: colors.cyan[800],
          900: "#d8efdc"
        },
        background: {
          900: colors.cyan[800],
          50: "#d8efdc"
        }
      }
    },
  },
  plugins: [
    require("nightwind")
  ],
}
