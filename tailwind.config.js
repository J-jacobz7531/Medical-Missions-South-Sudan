/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-teal': '#2dbaba',
        'light-teal-bg': '#e0f7fa',
        'dark-blue': '#0a2540',
        'primary-red': '#d9232d',
        'bright-blue': '#0052cc',
        'orange-accent': '#f56a00',
        'gray-text': '#525f7f',
        'border-color': '#e6e6e6',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 15px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
