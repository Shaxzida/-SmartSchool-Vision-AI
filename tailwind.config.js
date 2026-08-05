/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx,js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        accent: '#06B6D4'
      },
      boxShadow: {
        premium: '0 10px 30px rgba(37,99,235,0.12)'
      }
    },
  },
  plugins: [],
}
