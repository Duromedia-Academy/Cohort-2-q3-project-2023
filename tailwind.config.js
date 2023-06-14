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
        'brown':'rgb(34,34,34)',
        'cream':'rgb(248, 250, 244)'
      },
      fontSize:{
        'mag':'1.1rem',
        'lit':'13px'
      },
      maxWidth:{
        'idea':'1500px',
        'ok': '1250px',
        'no':'1150px',
        'yes':'500px',
        'yh':'1000px',
        'nice':'700px',
        'tin':'260px',
        'sit':'520px',
        'omo':'300px'
      },
      minHeight:{
        'bot':'52vh'
      },
      spacing:{
        'pad':'700px'
      }
    },
  },
  plugins: [],
}

