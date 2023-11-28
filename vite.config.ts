import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

const PORT = 3000;

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  build: {
    outDir: "build",
    emptyOutDir: true,
  },
  server: {
    port: PORT,
    open: "http://localhost:" + PORT,
  },
});
