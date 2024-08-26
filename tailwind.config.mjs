/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        xl: '1440px'
      },
      colors: {
        red: {
          400: '#F87070'
        },
        cyan: {
          300: '#70F3F8'
        },
        fucsia: {
          400: '#D881F8'
        },
        blue: {
          50: '#EFF1FA',
          100: '#D7E0FF',
          900: '#1E213F',
          950: '#161932'
        }
      },
      fontFamily: {
        kumbh: ['Kumbh Sans', 'system-ui'],
        roboto: ['Roboto Slab', 'system-ui'],
        space: ['Space Mono', 'system-ui']
      },
      keyframes: {
        timer: {
          '100%': { 'stroke-dashoffset': 0 }
        }
      }
    }
  },
  plugins: []
};
