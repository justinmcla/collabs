module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'header': ['Montserrat', 'sans-serif'],
      'body': ['Lato', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
