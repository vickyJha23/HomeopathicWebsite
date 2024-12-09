/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'swiper-pagination-bullet',
    'swiper-pagination-bullet-active',
],
  theme: {
    extend: {
       fontFamily:{
           "Times": ["Times New Roman", "serif"],
           "greatVibes": ["Great Vibes", "cursive"],
           "Caveat": ["Caveat", "cursive"],
           "Roboto-slab": ["Roboto Slab", "serif"],
           "Mukta": ["Mukta", "sans-serif"]
       },
       rotate:{
           "rot-y": "rotateY(180deg)"
       }
    },
  },
  plugins: [
    function ({addUtilities}) {
       const newUtilities = {
           '.perspective-1000': {
          perspective: '1000px',
        },
        '.perspective-800': {
          perspective: '800px',
        },
        '.perspective-500': {
          perspective: '500px',
        },
        '.perspective-200': {
          perspective: '200px',
        },
        ".preserve-3d": {
             "transform-style": "preserve-3d"
        }, 
        ".rotate-y": {
          "transform": "rotateY(180deg)"
        }, 
        ".backface-visibility": {
          "backface-visibility": "hidden"
        },
        ".conic-gradient-green": {
             background: "conic-gradient(#4caf50 0deg, #d3d3d3 0deg)"
        },
        ".conic-gradient-blue": {
             background: "conic-gradient(#4caf50 0deg, #d3d3d3 0deg)"
        },
        ".active": {
            padding: "0.5rem 1.5rem",
            "border-radius": "40px 2px 40px 2px",
            background: "#fff",
            color: "black"

        }
       }
       addUtilities(newUtilities);
    }
  ],
}

