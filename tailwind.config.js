/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
        'ping-slow': 'ping 1s linear infinite',
        'pulse-fast': 'pulse 1.4s linear infinite',
      }
    },
  },
  plugins: [],
}

