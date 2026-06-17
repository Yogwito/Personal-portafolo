/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bp: {
          base: 'var(--bp-base)',
          deep: 'var(--bp-deep)',
          surface: 'var(--bp-surface)',
          line: 'var(--bp-line)',
          trace: 'var(--bp-trace)',
        },
        accent: 'var(--accent)',
        amber: 'var(--accent-amber)',
        ink: 'var(--ink)',
        paper: 'var(--paper)',
        text: 'var(--text)',
        muted: 'var(--muted)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', 'ui-sans-serif', 'sans-serif'],
        body: ['"Hanken Grotesk Variable"', 'ui-sans-serif', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        board: '76rem',
      },
      keyframes: {
        'draw-edge': {
          from: { strokeDashoffset: '1' },
          to: { strokeDashoffset: '0' },
        },
        'node-pop': {
          '0%': { opacity: '0', transform: 'scale(0.4)' },
          '60%': { transform: 'scale(1.12)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.45' },
        },
        'rise-in': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'draw-edge': 'draw-edge 1.1s ease-out forwards',
        'node-pop': 'node-pop 0.5s cubic-bezier(0.22,1,0.36,1) forwards',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
        'rise-in': 'rise-in 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
