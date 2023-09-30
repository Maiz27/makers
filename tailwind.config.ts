import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('/imgs/logo/icon.png')",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        makers: {
          primary: '#FFDE59',

          secondary: '#dddce0',

          accent: '#36b7fd',

          neutral: '#121007',

          'base-100': '#fefdfb',

          info: '#42aad7',

          success: '#1d8145',

          warning: '#e6c10a',

          error: '#f54d82',
        },
      },
    ],
  },
};
export default config;
