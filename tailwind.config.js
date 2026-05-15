/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'blue-primary': '#2563EB',
        'indigo-primary': '#4F46E5',
        'cyan-primary': '#06B6D4',
      },
    },
  },
  plugins: [],
}
