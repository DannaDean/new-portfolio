 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        pink: "var(--pink)",
        purple: "var(--purple)",
        yellow: "var(--yellow)",
        rose: "var(--rose)",
        beige: "var(--beige)",
      },
      borderRadius: {
        border1: "var(--border-radius-1)",
        border2: "var(--border-radius-2)",
      },
      transitionTimingFunction: {
        custom: "var(--transition)",
      }
    },
  },
  plugins: [],
}