/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: { 
   
    extend: {
      colors: {
        'peak':' rgb(34, 34, 34)',
        'goal':'rgb(33, 205, 156)',
        'gap':'rgb(27, 73, 66)',
      },
      fontSize:{
        'mag':'1.1rem'
      },
      maxWidth:{
        'ok': '1250px'
      },
      transitionProperty: {
        'height': 'height .5s ease-in-out',
        'height2': 'height',
      },
      backgroundImage: {
        'accord': "linear-gradient(90deg,transparent,rgba(0,0,0,0.04),transparent)"
      },
      boxShadow: {
        'up': "0 -5px 15px rgba(0,0,0,.15)"
      },
      transform: {
        'right': "translateY(8px) rotate(45deg)",
        'left': "translateY(-8px) rotate(-45deg)"
      },
      fontFamily: {
        'YsabeauInfant': "Ysabeau Infant, sans-serif"
      },
    },
  },
  plugins: [],
}

