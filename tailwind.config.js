/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
      'max-sm': {'max': '600px'},
    },
  },
  },
  plugins: [],
}

