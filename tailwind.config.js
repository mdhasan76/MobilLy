/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mobilely: {
          primary: "#2a9d8f",
          secondary: "#e76f51",
          accent: "#84a98c",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}
