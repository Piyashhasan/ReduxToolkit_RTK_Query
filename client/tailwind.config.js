/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },

    extend: {},
  },

  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin")],
};
