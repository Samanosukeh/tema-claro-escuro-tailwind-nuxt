module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    darkSelector: '.dark-mode',
    colors: {
      white: '#ffffff',
      black: '#000000',
      blue: '#148DD9',
      red: '#e80c00',
      gray: "#a6a6a6",
    },
    extend: {

    },
  },
  variants: {
    backgroundColor: [
      'dark', 'dark-group-hover',
      'dark-even', 'dark-odd', 'hover',
      'responsive'
    ],
    borderColor: [
      'dark', 'dark-focus',
      'dark-focus-within',
      'hover', 'responsive'
    ],
    textColor: ['dark', 'dark-active', 'hover', 'responsive']
  },
  plugins: [require('tailwindcss-dark-mode')()],//dark mode
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue", "layouts/**/*.vue",
      "pages/**/*.vue", "plugins/**/*.js", "nuxt.config.js"
    ]
  }
}
