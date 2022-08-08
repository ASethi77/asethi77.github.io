/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "from": { "opacity": 0 },
          "to":   { "opacity": 1 }
        },  
        blurIn: {
          "from": { "filter": "blur(20px);" },
          "to":   { "filter": "blur(0px);" }
        }
      },
      animation: {
        fadeIn: "fadeIn 2s ease-out forwards",
        blurIn: "blurIn 0.5s ease-out forwards"
      }
    },
  },
  plugins: [
    require("daisyui")
  ],

  daisyui: {
    themes: [
      {
        apolloDark: {
          "primary": "#e0f2fe",
          "secondary": "#ffe4e6",
          "accent": "#bfdbfe",
          "neutral": "#e7e5e4",
          "base-100": "#0f151c",
          "info": "#0e7490",
          "success": "#bef264",
          "warning": "#fcd34d",
          "error": "#fb7185",
        },
        apolloLight: {
          "primary": "#0f151c",
          "secondary": "#be123c",
          "accent": "#ea580c",         
          "neutral": "#d6d3d1",         
          "base-100": "#f5f5f4",         
          "info": "#38bdf8",         
          "success": "#bef264",         
          "warning": "#fcd34d",         
          "error": "#fb7185",
        },
      }
    ],
  }
}