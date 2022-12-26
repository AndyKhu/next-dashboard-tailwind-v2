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
        'primary': {
          "1":colors.blue[700],
          "2":colors.blue[500]
        },
        'secondary': {
          "1":colors.indigo[700],
          "2":colors.indigo[500]
        },
        'success': {
        "1":colors.emerald[600],
        "2":colors.emerald[500]
        },
        'danger': {
          "1":colors.rose[600],
          "2":colors.rose[500]
        },
        'warning': {
          "1": colors.amber[500],
          "2":colors.amber[400]
        },
        'info': {
          "1": colors.sky[500],
          "2":colors.sky[400]
        },
        'dark': {
          "1": colors.gray[700],
          "2":colors.gray[500]
        },
        'light': {
          "1": colors.gray[100],
          "2":colors.gray[200]
        },
        'black': {
          "1": colors.black,
          "2": "rgba(0,0,0,0.5)"
        }
      },
      fontFamily:{
        inter: ['var(--font-inter)','ui-sans-serif']
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        progress: 'progress 1s ease-out forwards',
        ripple: 'ripple 0.5s linear',
        fromtop: 'fromtop 0.3s linear',
        frombot: 'frombot 0.3s linear',
        popup: 'popup 0.1s linear'
      },
      keyframes: {
        popup: {
          '0%': {scale: 0},
          '100%': {scale: 1}
        },
        fromtop: {
          '0%': {top: "-100%"},
          '100%':{top: 0}
        },
        frombot: {
          '0%': {top: "100%"},
          '100%':{top: 0}
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
        ripple: {
          from : {
            transform : 'scale(0.3)',
            opacity: 0
          },
          to: {
            transform : 'scale(3)',
            opacity: 0.3
          }
        },
        progress: {
          '0%': { 'stroke-dasharray': '0 100'}
        }
      }
    },
  },
  plugins: [],
}
