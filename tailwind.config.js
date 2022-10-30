/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '36rem',
      },
      fontSize: {
        '4/5xl': '200px',
      },
      width: {
        'wide': '90%',
        'semi-wide': '23%',
        'sm-wide': '76%',
        'smx-wide': '64%',
      },

    },
  },
  plugins: [],
}
