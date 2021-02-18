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
        thRed: "#FA0F50",
        thMagenta: "#D40BA7",
        thFuscia: "#C700EB",
        thPurple: "#7F0BD4",
        thIndigo: "#6D31F5"
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
