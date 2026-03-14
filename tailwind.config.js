/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ova: {
          green: '#00793A',
          yellow: '#FBAE17',
          deep: '#0B3B2B',
          ink: '#13201A',
          soft: '#EFF7F2'
        }
      },
      boxShadow: {
        card: '0 10px 30px rgba(0, 0, 0, 0.08)'
      },
      fontFamily: {
        display: ['"Segoe UI"', 'sans-serif']
      }
    }
  },
  plugins: []
};
