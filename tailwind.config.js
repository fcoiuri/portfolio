/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#FF69B4',
          cyan: '#00CED1',
          yellow: '#FFD700',
          purple: '#9D4EDD',
          green: '#06FFA5',
          orange: '#FF6B35',
          blue: '#6B9FFF',
          beige: '#FFF8F0',
          black: '#1A1A1A',
          white: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif']
      }
    }
  },
  plugins: []
};
