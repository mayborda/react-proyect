module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/img/header.jpg')",
      },

      fontFamily: {
      
        'serif': ['lato']
      },

      textColor: {
        'primary': '#e0e0e0',
        'secondary': '#000000',
        'light': '#bfb8c8',
        'danger': '#e3342f',
        'summerGreen': '#8bbea4',
        'shipGray' : '#393642',
        'tomThum' : '#2f4c37',
      },

      colors:{

        primary:{

          light: '#a4bea6',

          DEFAULT: '#00695c',

          dark: '#234347',
        },

        secondary:{

          light: '#ffddc1',

          DEFAULT: '#ffab91',

          dark: '#c97b63',
        },

        btn: {

          light: '#bfb8c8',

          DEFAULT: '#dccac2',

          dark: '#2f4c37',

          chantelle: '#bfb8c8'

        }

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}