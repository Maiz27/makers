import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        makers: {
          primary: '#FFDE59',

          secondary: '#F6F1E9',

          accent: '#00AEDF',

          neutral: '#E5EBE0',

          'base-100': '#040401',

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
