module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'deep-red': '#8A2432',
        'deeper-red': '#651A24',
        'shallow-red': '#BF3144',
        'ankeny-gold': '#EBA900',
        'iacity-black': '#151515'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
