const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [],
  theme: {
    nightwind: {
      transitionDuration: "750ms", // default '300ms'
    },

    extend: {
      // See https://github.com/jjranalli/nightwind#configuration
      colors: {
        foreground: { 
          50: colors.neutral[700],
          900: colors.neutral[200]
        },
        background: {
          50: colors.neutral[50],
          900: colors.neutral[900]
        },
        "accent-bluegreen": {
          50: "#417b7d",
          900: "#95b3a3"
        },
        "theme-darkblue": {
          50: "#1c243a",
          900: "#1c243a"
        },
        "accent-lightorange": {
          50: colors.orange[50],
          900: colors.orange[700]
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
