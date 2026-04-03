/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#F97316',
        'brand-red':    '#C2410C',
        'brand-cream':  '#FFF8ED',
        'brand-black':  '#0F0500',
        'brand-amber':  '#D97706',
        'brand-gold':   '#FBBF24',
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'Impact', 'Arial Black', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(5rem, 20vw, 15rem)', { lineHeight: '0.85', letterSpacing: '-0.02em' }],
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-left': {
          '0%':   { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%':   { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'fade-up':    'fade-up 0.7s ease-out forwards',
        'fade-in':    'fade-in 0.5s ease-out forwards',
        'slide-left': 'slide-left 0.7s ease-out forwards',
        'slide-right':'slide-right 0.7s ease-out forwards',
        'scale-in':   'scale-in 0.6s ease-out forwards',
        'float':      'float 3s ease-in-out infinite',
      },
    }
  },
  plugins: []
}
