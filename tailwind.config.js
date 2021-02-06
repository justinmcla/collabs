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
      'animation': {
        'gradient-xy':'gradient-xy 2s ease infinite',
      },
      'keyframes': {
        'gradient-xy': {
          '0%, 100%': {
            'background-size':'100% 100%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
      cursor: ['hover'],
    },
  },
  plugins: [],
}
