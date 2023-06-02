/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: { 
   
    extend: {
      colors: {
        'peak':' rgb(34, 34, 34)',
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

