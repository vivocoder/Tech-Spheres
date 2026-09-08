/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FCFAF7",
          100: "#F8F4EE",
          200: "#F1E9DF",
          300: "#E8DED2",
        },

        beige: {
          100: "#F5EEE6",
          200: "#E8D8C7",
          300: "#D8C0A7",
          400: "#C4A080",
        },

        brown: {
          400: "#C09A73",
          500: "#AD825B",
          600: "#956B47",
          700: "#795537",
        },

        charcoal: "#17212B",
        muted: "#66717A",
        border: "#E8E1D9",

        success: "#6E9274",
        blue: "#4E79A7",
      },

      fontFamily: {
        sans: ["var(--font-sans)", "Montserrat", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "serif"],
        body: ["var(--font-body)", "var(--font-sans)", "Montserrat", "sans-serif"],
        heading: ["var(--font-display)", "var(--font-serif)", "Playfair Display", "serif"],
      },

      boxShadow: {
        soft: "0 4px 24px rgba(23, 33, 43, 0.06)",
        card: "0 2px 12px rgba(23, 33, 43, 0.05)",
      },

      borderRadius: {
        xl: "16px",
        "2xl": "20px",
      },
    },
  },

  plugins: [],
};
