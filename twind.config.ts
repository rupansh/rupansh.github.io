import { defineConfig } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";
import presetAutoPrefix from "@twind/preset-autoprefix";

export default defineConfig({
  presets: [presetAutoPrefix(), presetTailwind()],
  theme: {
    fontFamily: {
      logo: ["Adamas", "sans-serif"],
    },
    extend: {
      colors: {
        "pallete-blue": "#08f7fe",
        "pallete-green": "#09fbd3",
        "pallete-red": "#fe53bb",
        "pallete-yellow": "#f5d300",
        "neutral": {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
    },
  },
});

export const configURL = import.meta.url;
