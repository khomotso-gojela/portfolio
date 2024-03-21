/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#9b90a4",// 050816
        secondary: "#050816",// aaa6c3
        tertiary: "#3a3263",// 151030
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        // 9b90a4
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
      },
    },
  },
  plugins: [],
};