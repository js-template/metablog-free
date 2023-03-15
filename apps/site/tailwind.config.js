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
      themes: [
         {
            light: {
               ...require('daisyui/src/colors/themes')['[data-theme=light]'],
               primary: '#3B82F6',
               'primary-focus': '#2563EB',
               'primary-content': '#ffffff',
               secondary: '#3B82F6',
               'secondary-focus': '#2563EB',
               'secondary-content': '#ffffff',
               accent: '#37cdbe',
               'accent-focus': '#2aa79b',
               'accent-content': '#ffffff',
               natural: '#8B5CF6',
               'natural-focus': '#7C3AED',
               'natural-content': '#ffffff',
               'base-100': '#ffffff',
               'base-200': '#f9fafb',
               'base-300': '#d1d5db',
               'base-content': '#1f2937',
               info: '#2094f3',
               success: '#009485',
               warning: '#ff9900',
               error: '#ff5724',
            },
         },
         {
            dark: {
               ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
               primary: '#3B82F6',
               'primary-focus': '#2563EB',
               'primary-content': '#ffffff',
               secondary: '#3B82F6',
               'secondary-focus': '#2563EB',
               'secondary-content': '#ffffff',
               accent: '#37cdbe',
               'accent-focus': '#2aa79b',
               'accent-content': '#ffffff',
               natural: '#8B5CF6',
               'natural-focus': '#7C3AED',
               'natural-content': '#ffffff',
               'base-100': '#1f2937',
               'base-200': '#111827',
               'base-300': '#374151',
               'base-content': '#ffffff',
               info: '#2094f3',
               success: '#009485',
               warning: '#ff9900',
               error: '#ff5724',
            },
         },
      ],
      base: true,
      utils: true,
      logs: false,
      rtl: false,
      prefix: '',
      darkTheme: 'light',
   },
}
