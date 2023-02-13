/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      colors: {
        "blue-1000": "#153477",
        "bgcolor-dark": "#050F2B",
      },
      animation: {
        opacityArrow: "opacityArrow 1s infinite alternate",
      },
      keyframes: {
        opacityArrow: {
          "0%": { opacity: 0.25 },
          "100%": { opacity: 0.8 },
        },
      },
      fontFamily: {
       lato: ['Lato', 'sans-serif']
      },
    },
  },
  plugins: [],
};
