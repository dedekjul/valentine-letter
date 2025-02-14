import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // 👈 Fix: Force relative paths for GitHub Pages & Vercel
  plugins: [react()],
});
