const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.css',
    './public/index.html',
    './src/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000', // black
        secondary: '#FEE73A', // yellow
        negative: '#E53E3E', // red
        warning: '#F6E05E' // orange
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
