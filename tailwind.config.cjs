const config = {
  
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte-blocks/**/*.{html,js,svelte,ts}'],

  plugins: [
    require('flowbite/plugin'),
    require('flowbite-typography'),
    require('tailwindcss-animated')
  ],

  darkmode: 'class',

  theme: {

    extend: {
      minHeight: {
        "152": "38rem"
      },
      height: {
        "140": "35rem"
      },
    },

    fontFamily: {
      lexend: "Lexend",
    }
  }
};

module.exports = config;
