/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    colors:{
      "sign-up":"#025464",
      "white":"white",
      "black":"black",
      "border":"#1B2430",
      "input":"#025464",
      "searchedBox":"#C6EBC5",
      "searchInput":"#000000",
      "info":"#FFF78A",
      "danger":"red"
    }
  },
  plugins: [],
}

