/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
