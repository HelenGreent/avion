/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind.colors.cjs')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' }
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      ...colors,
      'black-color-opacity': 'rgba(0, 0, 0, 0.1)',
      'dark-violet': '#22202E',
      'violet-color': '#2A254B',
      'middle-violet': '#5B5676',
      'light-violet': '#726E8D',
      'violet-opacity': 'rgba(249, 249, 249, 0.15);',
      'white-color': '#FFFFFF',
      'white-opacity': 'rgba(255, 255, 255, 0.15)',
      'light-grey': '#F9F9F9',
      'grey-violet': '#505977',
      'light-grey-icon': '#CAC6DA',
      'transparent-color': '#66000000'
    },
    fontFamily: {
      satoshi: ['Satoshi', 'sans-serif'],
      clash: ['Clash Display', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
