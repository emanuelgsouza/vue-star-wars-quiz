const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
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
