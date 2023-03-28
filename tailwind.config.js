/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   // sans: ["Poppins", "sans-serif"],
      // },

      colors: {
        aseel: "#11608f",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("flowbite"),
    require("@tailwindcss/aspect-ratio"),
    require("@headlessui/react"),
    require("@tailwindcss/line-clamp"),
  ],
};
