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
        'navlinks' : '#58615b',
      },
      rotate: {
        '225': '225deg',
      },
      keyframes: {
        'wave-alternate': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      },
      animation: {
        'wave-alternate': 'wave-alternate 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

