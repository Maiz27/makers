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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        makers: {
          primary: '#FFDE59',

          secondary: '#87f466',

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
