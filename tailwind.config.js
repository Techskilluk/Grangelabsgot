/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // New modern color palette centered around purple/violet
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065'
        }
      },
      fontFamily: {
        // Modern, clean font stack
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        // Distinctive display font for headings
        display: ['Clash Display', 'Cal Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      letterSpacing: {
        'tight': '-0.02em',
        'tighter': '-0.04em',
        'widest': '0.2em',
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2',
      },
    },
  },
  plugins: [],
};