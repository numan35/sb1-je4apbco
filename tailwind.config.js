/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#d9e2f2',
          200: '#b3c6e5',
          300: '#8ca9d9',
          400: '#668dcc',
          500: '#4071c0',
          600: '#335a9a',
          700: '#264473',
          800: '#192e4d',
          900: '#0F172A',
        },
        silver: {
          50: '#f7f7f7',
          100: '#ededed',
          200: '#dfdfdf',
          300: '#c6c6c6',
          400: '#a6a6a6',
          500: '#8C8C8C',
          600: '#6e6e6e',
          700: '#5a5a5a',
          800: '#3d3d3d',
          900: '#262626',
        },
        metallic: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#8C8E91',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        gold: {
          50: '#fff9e6',
          100: '#ffedb3',
          200: '#ffe180',
          300: '#ffd54d',
          400: '#ffc91a',
          500: '#D4AF37', // Metallic gold
          600: '#b38f00',
          700: '#806600',
          800: '#4d3d00',
          900: '#1a1400',
        },
      },
    },
  },
  plugins: [],
};