/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using a CSS class
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
 
  theme: {
    
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '100%': { transform: 'translateX(-100%)' },
          '0%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.2s ease-out forwards',
        slideOut: 'slideOut 0.2s ease-out forwards',
      },
      maxWidth: {
        'custom': '110rem', // Example custom width
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      aspectRatio: {
        '16/10': '16 / 11',
      },
      colors:{
        def: "#0E0E0E",
        defl: "#f9fafb",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
