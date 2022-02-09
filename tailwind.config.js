module.exports = {
    purge: [
      "./src/**/*.html",
      "./src/**/*.vue",
      "./src/**/**/*.vue",
      "./src/**/**/**/*.vue"
    ],
    prefix: "tw-",
    important: true,
    theme: {
      fontSize: {
        "pb-2xs": "0.63rem",
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem"
      },
      container: {
        center: true,
        padding: "3rem"
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
      },
      fontFamily: {
        display: ["Roboto", "sans-serif"],
        body: ["Roboto", "sans-serif"]
      },
      extend: {
        colors: {
          "bl-violet": {
            700: "#38183f"
          },
          "bl-green": {
            600: "#b4d336",
            700: "#4abfa7"
          }
        },
        margin: {
          "96": "24rem",
          "128": "32rem"
        },
        width: {
          "1/7": "14.2857143%",
          "2/7": "28.5714286%",
          "3/7": "42.8571429%",
          "4/7": "57.1428571%",
          "5/7": "71.4285714%",
          "6/7": "85.7142857%"
        }
      },
      transitionProperty: {
        // defaults to these values
        none: "none",
        all: "all",
        color: "color",
        bg: "background-color",
        border: "border-color",
        colors: ["color", "background-color", "border-color"],
        opacity: "opacity",
        transform: "transform"
      },
      transitionDuration: {
        // defaults to these values
        default: "250ms",
        "0": "0ms",
        "100": "100ms",
        "250": "250ms",
        "500": "500ms",
        "750": "750ms",
        "1000": "1000ms"
      },
      transitionTimingFunction: {
        // defaults to these values
        default: "ease",
        linear: "linear",
        ease: "ease",
        "ease-in": "ease-in",
        "ease-out": "ease-out",
        "ease-in-out": "ease-in-out"
      },
      transitionDelay: {
        // defaults to these values
        default: "0ms",
        "0": "0ms",
        "100": "100ms",
        "250": "250ms",
        "500": "500ms",
        "750": "750ms",
        "1000": "1000ms"
      },
      willChange: {
        // defaults to these values
        auto: "auto",
        scroll: "scroll-position",
        contents: "contents",
        opacity: "opacity",
        transform: "transform"
      }
    },
    variants: {
      opacity: ["responsive", "hover"],
      appearance: ["responsive"],
      backgroundColor: ["responsive", "hover", "focus"],
      transitionProperty: ["responsive"],
      transitionDuration: ["responsive"],
      transitionTimingFunction: ["responsive"],
      transitionDelay: ["responsive"],
      willChange: ["responsive"]
    },
    plugins: []
  };
  