/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"], // ← هذا هو المهم
  theme: {
    extend: {
        keyframes: {
        slowBounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(-20px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        slowBounce: 'slowBounce 3s infinite', // ← تقدر تخليها 4s لو عايز أبطأ
      },
    },
  },
  plugins: [],
};
