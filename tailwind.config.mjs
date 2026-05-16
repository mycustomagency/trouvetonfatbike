/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      // ─── Palette de marque ───────────────────────────────────────────────
      colors: {
        brand: {
          orange:      '#E8593C',
          'orange-light': '#FF7A56',
          'orange-dark':  '#C43D22',
          'orange-glow':  'rgba(232, 89, 60, 0.15)',
          black:       '#0A0A0A',
          'gray-900':  '#111111',
          'gray-800':  '#1A1A1A',
          'gray-700':  '#242424',
          'gray-600':  '#2E2E2E',
          'gray-500':  '#3D3D3D',
          'gray-400':  '#5A5A5A',
          'gray-300':  '#888888',
          'gray-200':  '#B0B0B0',
          'gray-100':  '#D4D4D4',
          offwhite:    '#F4EFE6',
          cream:       '#FAF7F2',
          white:       '#FFFFFF',
        },
      },

      // ─── Typographie ─────────────────────────────────────────────────────
      fontFamily: {
        display: ['"Clash Display"', '"DM Sans"', 'system-ui', 'sans-serif'],
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
        xs:    ['0.75rem', { lineHeight: '1rem' }],
        sm:    ['0.875rem', { lineHeight: '1.25rem' }],
        base:  ['1rem',    { lineHeight: '1.75rem' }],
        lg:    ['1.125rem', { lineHeight: '1.75rem' }],
        xl:    ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem',  { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem',    { lineHeight: '1.15' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem',  { lineHeight: '1.05' }],
        '8xl': ['6rem',    { lineHeight: '1' }],
        '9xl': ['8rem',    { lineHeight: '1' }],
      },

      // ─── Espacements ─────────────────────────────────────────────────────
      spacing: {
        '4.5': '1.125rem',
        '18':  '4.5rem',
        '22':  '5.5rem',
        '26':  '6.5rem',
        '30':  '7.5rem',
        '34':  '8.5rem',
        '38':  '9.5rem',
        '88':  '22rem',
        '92':  '23rem',
        '128': '32rem',
      },

      // ─── Layout ──────────────────────────────────────────────────────────
      maxWidth: {
        '8xl':  '88rem',
        '9xl':  '96rem',
        '10xl': '104rem',
      },
      minHeight: {
        'screen-75': '75vh',
        'screen-85': '85vh',
        'hero': 'calc(100vh - 5rem)',
      },

      // ─── Border radius ───────────────────────────────────────────────────
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // ─── Animations ──────────────────────────────────────────────────────
      animation: {
        'fade-up':        'fadeUp 0.6s ease-out forwards',
        'fade-in':        'fadeIn 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'float':          'float 6s ease-in-out infinite',
        'pulse-orange':   'pulseOrange 2.5s ease-in-out infinite',
        'shimmer':        'shimmer 2s linear infinite',
        'spin-slow':      'spin 8s linear infinite',
        'bounce-subtle':  'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
        pulseOrange: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(232, 89, 60, 0)' },
          '50%':       { boxShadow: '0 0 0 12px rgba(232, 89, 60, 0.12)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-4px)' },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-expo':  'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      },

      // ─── Backgrounds ─────────────────────────────────────────────────────
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(to bottom, rgba(10,10,10,0) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,1) 100%)',
        'card-gradient':
          'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        'orange-radial':
          'radial-gradient(ellipse at center, rgba(232,89,60,0.2) 0%, transparent 65%)',
        'section-gradient':
          'linear-gradient(to bottom, #0A0A0A 0%, #111111 100%)',
        'shimmer-gradient':
          'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
      },

      // ─── Box shadows ─────────────────────────────────────────────────────
      boxShadow: {
        'orange':      '0 0 30px rgba(232, 89, 60, 0.25)',
        'orange-lg':   '0 0 60px rgba(232, 89, 60, 0.20)',
        'orange-sm':   '0 0 15px rgba(232, 89, 60, 0.30)',
        'card':        '0 2px 20px rgba(0,0,0,0.4)',
        'card-hover':  '0 8px 40px rgba(0,0,0,0.6), 0 0 20px rgba(232,89,60,0.1)',
        'glass':       '0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
        'inset-top':   'inset 0 1px 0 rgba(255,255,255,0.06)',
      },

      // ─── Backdrop blur ───────────────────────────────────────────────────
      backdropBlur: {
        xs: '2px',
      },

      // ─── Aspect ratios ───────────────────────────────────────────────────
      aspectRatio: {
        'hero':    '16 / 7',
        'card':    '4 / 3',
        'product': '3 / 4',
      },

      // ─── z-index ─────────────────────────────────────────────────────────
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
