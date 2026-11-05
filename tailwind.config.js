/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terra: {
          bg: "#080D18",
          panel: "#101A2B",
          card: "#132137",
          border: "#1C314E",
          hover: "#1A2E4C",
          cyan: "#16B8E8",
          cyanGlow: "#00E5FF",
          orange: "#F59E0B",
          red: "#EF4444",
          purple: "#8B5CF6",
          emerald: "#10B981",
          muted: "#64748B",
          text: "#E2E8F0",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'cyan-glow': '0 0 15px rgba(22, 184, 232, 0.25)',
        'cyan-glow-lg': '0 0 25px rgba(22, 184, 232, 0.4)',
        'orange-glow': '0 0 15px rgba(245, 158, 11, 0.25)',
        'red-glow': '0 0 15px rgba(239, 68, 68, 0.3)',
      }
    },
  },
  plugins: [],
}
