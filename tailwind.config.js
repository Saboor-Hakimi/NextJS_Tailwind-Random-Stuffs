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
