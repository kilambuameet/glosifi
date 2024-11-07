/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // You can customize or add new colors here
        brown: {
          50: '#f5ebe7',
          100: '#ead4cc',
          200: '#d6a793',
          300: '#c47a59',
          400: '#b34e20',
          500: '#9a3616',
          600: '#7b2b12',
          700: '#5d200e',
          800: '#3e140a',
          900: '#1f0705',
        },
      },
    },
  },
  plugins: [],
}


