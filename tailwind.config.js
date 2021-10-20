module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#771BC9',
        secondary: '#2F0C68',
        paragraphColor: '#828FAD'
      },
      boxShadow: {
        default: '0px 10px 25px 0px #DDE2FF;'
      },
      fontFamily: {
        display: ['Roboto'],
        body: ['sans', 'Roboto']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
