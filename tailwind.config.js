// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust this if needed
  ],
  theme: {
    extend: {
      animation: {
        slideInRight: "slideInFromRight 0.6s ease-out forwards",
      },
      keyframes: {
        slideInFromRight: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};
