module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'deep-red': '#8A2432'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
