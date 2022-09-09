/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx,jsx,js}'],
  safelist: [
    'bg-gray-200',
    'radix-state-on:bg-justification-lr',
    'radix-state-on:bg-justification-co',
    'radix-state-on:bg-justification-bp',
    'radix-state-on:bg-justification-ra',
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
      colors: {
        primary: '#294680',
        'primary-300': '#E4E5EF',
        'primary-400': '#999FC2',
        'primary-500': '#7A87AF',
        'primary-600': '#566B9A',
        'primary-700': '#294680',
        'primary-800': '#1F3863',
        'primary-900': '#142843',
        secondary: '#3AB6E7',
        'secondary-400': '#E7EFFB',
        'secondary-500': '#84C7EF',
        'secondary-600': '#63C2EB',
        'secondary-700': '#3AB6E7',
        'secondary-800': '#2C92B5',
        'secondary-900': '#1D687B',
        'orange-300': '#FFF2E6',
        'orange-400': '#FFC59D',
        'orange-500': '#FFAA80',
        'orange-600': '#FF6633',
        'orange-700': '#FF8A5E',
        'orange-800': '#C94A25',
        'orange-900': '#892917',
      },
      backgroundColor: {
        'justification-lr': '#DB2777',
        'justification-co': '#7C3AED',
        'justification-bp': '#F59E0B',
        'justification-ra': '#10B981',
      },
      backgroundImage: {
        mountain: 'var(--mountain-bgr)',
      },
    },
  },
  plugins: [require('tailwindcss-radix')()],
}
