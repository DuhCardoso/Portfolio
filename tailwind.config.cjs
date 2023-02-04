/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors:{
      "blue-1000": "#153477",
      "bgcolor-dark": "#050F2B"
      }
    },
  },
  plugins: [],
}
