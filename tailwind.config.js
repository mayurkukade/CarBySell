
import withMT from "@material-tailwind/react/utils/withMT";




export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        latto:["Latto","sans-serif"],
        Merriweather:["Merriweather","sans-serif"]
      }
    },
  },
  plugins: [],
});

