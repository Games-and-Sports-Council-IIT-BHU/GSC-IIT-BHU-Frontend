/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        popins: ["Poppins", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
        gelasio: ["'Gelasio'", "serif"],
        lexend: ["Lexend Zetta", "sans-serif"],
      },
    },
    screens: {
      txs: "280px",
      xxs: "400px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      smd: "900px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    }, colors :{
      'statsbg': '#1e1e1e', //background color for stats section
      'about-red':'#d71c1b'
    },
    backgroundSize:{
      '18%': '18%', //background size for stats section
      '33%':'33%' //background size for stats section
    },
    backgroundPosition:{
      'top-4': 'center top 4.5rem', 
      'top-3': 'center top 3rem', 
      'top-2': 'center top 2rem', 
      'bottom': 'center bottom',
      'left-bottom': 'left bottom',
      'left-bottom-2': 'left 7rem bottom ',
      'left-bottom-3': 'left 4rem bottom ',
      'left-bottom-4': 'left 2rem bottom ',
      'right-bottom-lg': 'right 30rem bottom ',
      'right-bottom-md': 'right 15rem bottom ',
      'right-bottom-sm': 'right 10rem bottom ',
      'right-bottom': 'right bottom',
      'left-top': 'left top',
      'right-top': 'right top',
      'right-top-2': 'right 13rem top',
      'right-top-3': 'right 5rem top 4rem',

    },
    backgroundSize:{
      'cover': 'cover',
    },
    letterSpacing: {
     
      tight: '-.2em',
      
    }
  },
  plugins: [],
});
