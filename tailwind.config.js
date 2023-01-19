{import('tailwindcss').Config}

//const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.{js,jsx,ts,tsx,vue}",
  'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',

],

  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("daisyui"),
   require("@tailwindcss/aspect-ratio"),
   require('flowbite/plugin'),
          ]
         

}