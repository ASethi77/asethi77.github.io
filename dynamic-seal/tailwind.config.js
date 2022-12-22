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
          900: colors.zinc[100]
        },
        background: {
          50: colors.zinc[100],
          900: colors.zinc[800]
        }
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        lg: "1.125rem",
        xl: '1.25rem',
        "2xl": '1.563rem',
        "3xl": '2rem',
        "4xl": '2.75rem',
        "5xl": '3.5rem',
        "6xl": '5rem',
        "7xl": '7.5rem',
        "8xl": '10rem',
        "9xl": '12rem'
      }
    },
  },
  plugins: [
    require("nightwind"),
    require("@tailwindcss/typography")
  ],
}
