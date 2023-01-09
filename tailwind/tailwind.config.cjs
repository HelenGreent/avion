/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind.colors.cjs')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      'black-color-opacity': 'rgba(0, 0, 0, 0.1)',
      'dark-violet': '#22202E',
      'violet-color': '#2A254B',
      'middle-violet': '#5B5676',
      'light-violet': '#726E8D',
      'violet-opacity': 'rgba(249, 249, 249, 0.15);',
      'white-color': '#FFFFFF',
      'white-opacity': 'rgba(255, 255, 255, 0.15)'
    },
    fontFamily: {
      satoshi: ['Satoshi', 'sans-serif'],
      clash: ['Clash Display', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
