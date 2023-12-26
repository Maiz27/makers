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
      // keyframes: {
      //   tend: {
      //     '0%': { transform: 'translateX(-100%)' },
      //     '50%': { transform: 'translateX(0)' },
      //     '100%': { transform: 'translateX(100%)' },
      //   },
      // },
      // animation: {
      //   tend: 'tend 0.5s ease-in-out forwards',
      //   'tend-2': 'tend 0.5s 100ms ease-in-out forwards',
      //   'tend-3': 'tend 0.5s 200ms ease-in-out forwards',
      //   'tend-4': 'tend 0.5s 300ms ease-in-out forwards',
      //   'tend-5': 'tend 0.5s 400ms ease-in-out forwards',
      // },
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
