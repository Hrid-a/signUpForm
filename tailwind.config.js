/** @type {import('tailwindcss').Config} */
const withOpacity = (colorValue) => {
  return ({ opacityValue }) => {
    return opacityValue ? `hsla(var(${colorValue}, ${opacityValue}))` : `hsla(var(${colorValue}))`;
  }
}
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      textColor: {
        base: {
          "primary-red": withOpacity("--clr-red-primary"),
          "primary-green": withOpacity("--clr-green-primary"),
          accent: withOpacity("--clr-blue-accent"),
          "neutral-dark": withOpacity("--clr-dark-neutral"),
          "neutral-light": withOpacity("--clr-light-neutral"),
        }
      },
      backgroundColor: {
        base: {
          "primary-red": withOpacity("--clr-red-primary"),
          "primary-green": withOpacity("--clr-green-primary"),
          accent: withOpacity("--clr-blue-accent"),
        }
      },
      borderColor: {
        base: {

          "neutral-light": withOpacity("--clr-light-neutral"),
        }
      }

    },
  },
  plugins: [],
}

