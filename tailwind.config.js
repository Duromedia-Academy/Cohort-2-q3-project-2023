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
          'badge':'#F8FAF4',
        'lemon':'#C8E3D8',
        'sky':'#9ed5e7',
        'blue':' #0d6efd',
        'rod':'#7499d0',
    
        'brown':'rgb(34,34,34)',
        'cream':'rgb(248, 250, 244)',
        'blu':'#41469c',
      },
      fontSize:{
         'mag':'1.1rem',
        'lit':'13px',
        'mac':'4.4rem'
      },
      maxWidth:{
        'ok': '1250px',
            'idea':'1500px',
   
        'no':'1150px',
        'yes':'500px',
        'yh':'1000px',
        'nice':'700px',
        'tin':'260px',
        'sit':'520px',
        'omo':'300px',
        'me':'1200px'
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
      minHeight:{
        'bot':'52vh'
      },
      spacing:{
        'pad':'700px'
      },
      lineHeight:{
        'it':'5rem'
      }
    },
  },
  plugins: [],
}

