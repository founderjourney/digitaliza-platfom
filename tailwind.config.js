/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Mobile-first breakpoints
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      // Performance-driven animations
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      // Theme colors for 4 restaurant types
      colors: {
        // Japanese theme
        japanese: {
          primary: '#C41E3A',
          secondary: '#2C1810',
          accent: '#FFB7C5',
          bg: '#FFF9F9',
        },
        // Italian theme
        italian: {
          primary: '#228B22',
          secondary: '#DC143C',
          accent: '#FFD700',
          bg: '#FFFAF0',
        },
        // Mexican theme
        mexican: {
          primary: '#FF6B35',
          secondary: '#004225',
          accent: '#F7931E',
          bg: '#FFF8DC',
        },
        // Coffee theme
        coffee: {
          primary: '#8B4513',
          secondary: '#2F1B14',
          accent: '#D2691E',
          bg: '#FDF5E6',
        },
      },
      // Mobile-optimized spacing
      spacing: {
        'touch': '44px', // Minimum touch target
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
    },
  },
  plugins: [],
}