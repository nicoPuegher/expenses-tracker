/** @type {import('tailwindcss').Config} */

import { primary, support, neutral, error } from './src/utils/theme/theme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary,
        support,
        neutral,
      },
      textColor: {
        primary,
        support,
        neutral,
        error,
      },
      ringColor: {
        neutral,
      },
      outlineColor: {
        primary,
      },
      divideColor: {
        neutral,
      },
    },
    borderWidth: {
      14: '14px',
    },
  },

  plugins: [],
};
