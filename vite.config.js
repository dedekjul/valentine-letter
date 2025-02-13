import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke": {
          "text-shadow":
            "0 0 1px #000, 0 0 1px #000, 0 0 1px #000, 0 0 1px #000",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
});
