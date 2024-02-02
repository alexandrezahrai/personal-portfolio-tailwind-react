/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "992px",
        xl: "1358px",
      },
      fontFamily: {
        Syne: ["Syne", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        circular: ["Circular", "sans-serif"],
        "circular-medium": ["Circular-Medium", "sans-serif"],
        "circular-light": ["Circular-Light", "sans-serif"],
      },
      colors: {
        // 'primary-yellow': '#FAE787',
        // 'primary-green': '#16A582',
        // 'primary-pink': '#FF91B3',
        // 'primary-blue': '#63ADF2',
        // 'primary-gray': '#F6F6F6',
        // 'primary-black': '#222222',

        "primary-green": "#00ae5b",
        "primary-purple": "#A35EF2",
        "primary-pink": "#ef479e",
        "primary-blue": "#3360ff",
        "primary-gray": "#F6F6F6",
        "primary-black": "#222222",
      },
    },
  },
  plugins: [],
};
