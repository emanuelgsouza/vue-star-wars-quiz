const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#000', // black
        secondary: '#FEE73A' // yellow
      },
      fontFamily: {
        sans: [
          'Bungee',
          ...defaultTheme.fontFamily.sans
        ]
      }
    }
  },
  variants: {},
  plugins: []
}
