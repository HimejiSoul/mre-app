import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'rme-blue-500': '#1479FF',
        'rme-black': '#020C19',
        'rme-gray-500': '#6F90BA',
        'rme-gray-300': '#A9BCD6',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        fadeInFromTop: {
          '0%': { opacity: '0', transform: 'translateY(-1.5rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInFromRight: {
          '0%': { opacity: '0', transform: 'translateX(1.5rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInFromBottom: {
          '0%': { opacity: '0', transform: 'translateY(1.5rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInFromLeft: {
          '0%': { opacity: '0', transform: 'translateX(-1.5rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-top': 'fadeInFromTop ease-out',
        'fade-in-right': 'fadeInFromRight ease-out',
        'fade-in-bottom': 'fadeInFromBottom ease-out',
        'fade-in-left': 'fadeInFromLeft ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
