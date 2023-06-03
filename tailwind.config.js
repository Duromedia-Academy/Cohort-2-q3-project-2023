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
    },
  },
  plugins: [],
}

