/** @type {import('tailwindcss').Config} */
// TrouveTonFatbike : charte "outdoor" (forêt, sable, orange signature)
export default {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
  theme: {
    extend: {
      colors: {
        ink:    { DEFAULT: '#17201B', soft: '#3B4640', mute: '#6B746E' },
        sand:   { DEFAULT: '#F4EEE3', light: '#FAF7F1', dark: '#E7DDCB' },
        forest: { DEFAULT: '#1F3A2C', light: '#2E5440', dark: '#132419' },
        moss:   { DEFAULT: '#6E8B4E', light: '#A9BE8C' },
        orange: { DEFAULT: '#E8593C', light: '#FF7A56', dark: '#C43D22', soft: '#FCE6DF' },
        navy:   { DEFAULT: '#1E3A5F' },
        ok:     { DEFAULT: '#2F7D4F', soft: '#E1F1E6' },
        warn:   { DEFAULT: '#B7791F', soft: '#FBF0DA' },
        bad:    { DEFAULT: '#B42318', soft: '#FBE4E1' },
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '76rem', prose: '44rem' },
      borderRadius: { '4xl': '2rem' },
      boxShadow: {
        card: '0 1px 2px rgba(23,32,27,.06), 0 8px 24px -12px rgba(23,32,27,.18)',
        lift: '0 2px 4px rgba(23,32,27,.08), 0 18px 40px -16px rgba(23,32,27,.28)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
