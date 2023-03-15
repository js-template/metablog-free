/** @type {import('tailwindcss').Config} */
module.exports = {
   mode: 'jit',
   content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {},
   },

   // add daisyUI plugin
   plugins: [require('daisyui')],

   // daisyUI config (optional)
   daisyui: {
      styled: true,
      themes: true,
      base: true,
      utils: true,
      logs: false,
      rtl: false,
      prefix: '',
      darkTheme: 'light',
   },
}
