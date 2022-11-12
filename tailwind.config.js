/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '36rem',
        '110': '27rem',
        '105': '23rem',
        '108': '21rem',
        'tall': '40rem',
        '100%': '100%',
        '71': '261.5px',
        '58': '16rem',
        '50': '206px',
        '53': "216",
      },
      fontSize: {
        '4/5xl': '200px',
      },
      width: {
        'wide': '80%',
        'semi-wide': '23%',
        'sm-wide': '76%',
        'smx-wide': '64%',
        'wide-sm': '50%',
      },

    },
  },
  plugins: [],
}
