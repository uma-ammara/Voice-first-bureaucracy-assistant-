/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16241F",
        paper: "#F7F8F6",
        teal: {
          DEFAULT: "#0F5C56",
          dark: "#0B443F",
          light: "#E4EFEE"
        },
        ochre: {
          DEFAULT: "#C98A2C",
          light: "#F7E9D2"
        },
        alert: {
          DEFAULT: "#B23A2E",
          light: "#F7E1DE"
        },
        success: {
          DEFAULT: "#2F7A4D",
          light: "#E1F0E6"
        }
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "system-ui", "sans-serif"],
        urdu: ["Noto Nastaliq Urdu", "Noto Naskh Arabic", "serif"]
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "scaleY(0.35)" },
          "50%": { transform: "scaleY(1)" },
        },
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        wave: "wave 1.1s ease-in-out infinite",
        "rise-in": "rise-in 0.5s ease-out both",
      },
    },
  },
  plugins: [],
}
