/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Background: "#1e1b4b",
        BlueBackground: "#4f46e5",
        GrayBackground: "#2D27A0",
        colorOne: "#030712",
        colorTwo: "#e0e7ff",
        roundOne: "#6847ff",
        roundTwo: "#6043eb",
        roundThree: "#583dd3",
        roundFour: "#5039bb",
        roundFive: "#4735a3",
        roundSix: "#3f318b",
        messageBg:"#e0e7ff",
        messageWoman:"#6366f1"
      },
    },
  },
  plugins: [],
};
