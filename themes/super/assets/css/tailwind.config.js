const themeDir = __dirname + "/../../";

module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: [
      themeDir + "layouts/**/*.html",
      themeDir + "content/**/*.html",
      themeDir + "content/**/**/*.html",      
      "layouts/**/*.html",
      "hugo.toml",
      "content/**/*.html",
      "assets/js/main.js",
      "assets/js/search.js"
    ],
  },


  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fly-in-right': {
          '0%': { 
            opacity: '0', 
            transform: 'translateX(100%)' // Start 100% off-screen to the right
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0)' // End at its final position
          },
        },
        'fly-in-left': { // New keyframes for flying in from the left
          '0%': { 
            opacity: '0', 
            transform: 'translateX(-100%)' // Start 100% off-screen to the left
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0)' // End at its final position
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in forwards',
        'fly-in-from-right': 'fly-in-right 1s ease-out forwards', // 1s duration, ease-out timing, stays at end
        'fly-in-from-left': 'fly-in-left 1s ease-out forwards',   // 1s duration, ease-out timing, stays at end
      },
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              'code::before': {
                content: '""',
              },
              'code::after': {
                content: '""',
              },
            }
          ]
        },
        dark: {
          css: [
            {
              color: theme("colors.gray.400"),
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              a: {
                color: theme("colors.white"),
              },
              strong: {
                color: theme("colors.white"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.200"),
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: {
                color: theme("colors.white"),
              },
              h2: {
                color: theme("colors.white"),
              },
              h3: {
                color: theme("colors.white"),
              },
              h4: {
                color: theme("colors.white"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.white"),
              },
              "a code": {
                color: theme("colors.white"),
              },
              'code::before': {
                content: '""',
              },
              'code::after': {
                content: '""',
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
