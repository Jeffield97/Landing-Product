/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        topbar: "#252F3D",
        back_product: "#fafafa",
        back_testimonial: "#fff",
        blue_user: "#2C7EF8",
        blue_opaque: "#EDF3FD",
        green_user: "#59AE43",
        separator_user: "#CFCFCF",
      },
    },
  },
  plugins: [],
};
