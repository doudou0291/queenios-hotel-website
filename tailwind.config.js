/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
      "black":"#212121",
      "brown":"#8C7460",
      "biege":"#F8F5EF",
      "white":"#FFFFFF"
     },
     backgroundImage:{
      "about":"url('/about.jpg')",
      "room-1":"url('/room-1.png')",
      "room-2":"url('/room-2.png')",
      "room-3":"url('/room-3.png')",
      "room-4":"url('/room-4.png')",
      "room":"url('/room.jpg')",
      "map":"url('/map.png')",
      "home-page":"url('/home-page.jpg')",
      "logo":"url('/logo.png')",
      "booking":"url('/booking.png')",
     },
     
    },
  },
  plugins: [],
};
