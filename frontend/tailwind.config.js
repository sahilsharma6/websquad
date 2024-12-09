/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '7xl': '7rem',
        '8xl': '8rem',
        '9xl': '9rem',
        '10xl': '10rem',
      },
      colors: {
        'primary': '#a8b3ab',
        'secondary': '#0b0d0c',
      },
      rotate: {
        '225': '225deg',
      }
    },
  },
  plugins: [],
}

