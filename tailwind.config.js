module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'header': ['Montserrat', 'sans-serif'],
      'body': ['Lato', 'sans-serif']
    },
    extend: {
      colors: {
        themeGreen: "#0BD904",
        themeDarkGreen: "#09A603",
        themeDandelion: "#F2B705",
        themeOrange: "#728705",
        themeRed: "#F20505"
      },
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
