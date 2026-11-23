/** @type {import('tailwindcss').Config} */
// TrouveTonFatbike : charte « sport » (noir, orange vif, blanc)
export default {
  content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
  theme: {
    extend: {
      colors: {
        ink:    { DEFAULT: '#141414', soft: '#4A4744', mute: '#77726D' },
        sand:   { DEFAULT: '#F3F1EE', light: '#FBFAF8', dark: '#E6E2DC' },
        forest: { DEFAULT: '#161616', light: '#242424', dark: '#0E0E0E' }, // noir anthracite (ancien vert)
        moss:   { DEFAULT: '#6E8B4E', light: '#A9BE8C' },
        orange: { DEFAULT: '#FF5A1F', light: '#FF7A45', dark: '#D9430F', soft: '#FFE7DC' },
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
        card: '0 1px 2px rgba(0,0,0,.06), 0 10px 28px -14px rgba(0,0,0,.25)',
        lift: '0 2px 4px rgba(0,0,0,.08), 0 22px 44px -18px rgba(0,0,0,.4)',
        glow: '0 12px 26px -10px rgba(255,90,31,.65)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
