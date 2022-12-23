/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        'maxheight': 'max-height',
      },
      width:{
        "1/8": "12.5%"
      },
      colors: {
        'primary': colors.blue[700],
        'secondary': colors.indigo[700],
        'success': colors.emerald[600],
        'danger': colors.rose[600],
        'warning': colors.amber[500],
        'info': colors.sky[500],
        'dark': colors.gray[700],
        'light': colors.gray[100]

      },
      fontFamily:{
        inter: ['var(--font-inter)','ui-sans-serif']
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        progress: 'progress 1s ease-out forwards'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
        progress: {
          '0%': { 'stroke-dasharray': '0 100'}
        }
      }
    },
  },
  plugins: [],
}
