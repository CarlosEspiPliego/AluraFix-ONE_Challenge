import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {
      },
      themes: {
        light: {
          layout: {
            
          },
          colors: {
            background: "#FCFCFC",
            primary: {
              50: "#E7F1F8",
              100: "#CFE2F1",
              200: "#9FC5E2",
              300: "#70A9D4",
              400: "#408CC5",
              500: "#106FB7",
              600: "#0E64A5",
              700: "#0E5E9C",
              800: "#0D5992",
              900: "#0C5389",
              DEFAULT: "#106FB7",
            },
            secondary: {
              50: "#FFFCEA",
              100: "#FEF8D5",
              200: "#FDF1AB",
              300: "#FDEB81",
              400: "#FCE457",
              500: "#FBDD2D",
              600: "#E2C728",
              700: "#D5BC26",
              800: "#C9B124",
              900: "#BCA622",
              DEFAULT: "#FBDD2D",
            },
            tertiary: {
              50: "#F0F9ED",
              100: "#E2F3DB",
              200: "#C4E7B7",
              300: "#A7DA92",
              400: "#89CE6E",
              500: "#6CC24A",
              600: "#61AF43",
              700: "#5CA53F",
              800: "#569B3B",
              900: "#519237",
              DEFAULT: "#6CC24A",
            },
          }
        },
        dark: {
          layout: {},
          colors: {
            background: {
              DEFAULT: "#171717",
            },
            primary: {
              50: "#FFF9E8",
              100: "#FEF4D0",
              200: "#FDE8A2",
              300: "#FDDD73",
              400: "#FCD145",
              500: "#FBC616",
              600: "#E2B214",
              700: "#D5A813",
              800: "#C99E12",
              900: "#BC9510",
              DEFAULT: "#FBC616",
            },
            secondary: {
              50: "#F6F7F7",
              100: "#EEEEEF",
              200: "#DCDDDF",
              300: "#CBCCCE",
              400: "#B9BBBE",
              500: "#A8AAAE",
              600: "#97999D",
              700: "#8F9094",
              800: "#86888B",
              900: "#7E8082",
              DEFAULT: "#A8AAAE",
            }
          }
        }
      }
    })
  ],
}