const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dock-gradient":
          "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.15))",
        "dock-shadow": "rgba(255, 255, 255, 0.17) 0px 0px 0px 1px inset",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
        syne: ["var(--font-syne)", ...fontFamily.sans],
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      keyframes: {
        "fade-in": {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "none" },
        },
        "fade-in-rotate": {
          from: {
            opacity: 0,
            transform: "translateY(20px)",
            transform: "rotate(5deg)",
          },
          to: { opacity: 1, transform: "none", transform: "rotate(15deg)" },
        },
        "fade-in-opp": {
          from: { opacity: 0, transform: "-translateY(20px)" },
          to: { opacity: 1, transform: "none" },
        },
      },
      animation: {
        "fade-in": "fade-in 750ms var(--animation-delay,0ms) ease forwards",
        "fade-in-rotate":
          "fade-in-rotate 750ms var(--animation-delay,0ms) ease forwards",
        "fade-in-opp": "fade-in 750ms var(--animation-delay,0ms) ease forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
