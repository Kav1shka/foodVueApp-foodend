{import('tailwindcss').Config}

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
],

  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("daisyui"),
   require("@tailwindcss/aspect-ratio"),

          ]
         

}