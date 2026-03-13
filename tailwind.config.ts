import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B5CF6', // Purple-500
          light: '#A78BFA',   // Purple-400
          dark: '#6D28D9',    // Purple-700
        },
        secondary: {
          DEFAULT: '#3B82F6', // Blue-500
          light: '#60A5FA',   // Blue-400
          dark: '#2563EB',    // Blue-600
        },
        accent: {
          DEFAULT: '#EC4899', // Pink-500
          light: '#F472B6',   // Pink-400
          dark: '#DB2777',    // Pink-600
        },
        background: {
          deep: '#0b0218',
          dark: '#1a0b2e',
          DEFAULT: '#111827',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { 'box-shadow': '0 0 10px #8B5CF6, 0 0 20px #8B5CF6' },
          'to': { 'box-shadow': '0 0 20px #8B5CF6, 0 0 40px #8B5CF6' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

export default config