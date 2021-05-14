const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.trueGray,
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        red: colors.red,
        blueLight: colors.lightBlue,
        blue: colors.blue,
        indigo: colors.indigo,
        green: colors.green,
        yellow: colors.amber,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
