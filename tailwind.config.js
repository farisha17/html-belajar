/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
      extend: {
        fontFamily:{
            'pinky': ['Teko', 'sans-serif'],
            'orange' : ['EB Garamond', 'serif'],
            'levi' : ['Pirata One", system-ui'],
        }
      },
    },
    plugins: [],
  }