/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}",
    './assets/js/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#49111C',
        secondary: '#5e503f',
        tercery: '#A9927D',
        hoverButton: '#4f262e',
        activeButton: '#48272d'
      }
    },
  },
  plugins: [],
}

