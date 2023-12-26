import { VitePWA } from "vite-plugin-pwa";
import { IViteConfigParams } from "./vite.config.types";

//TODO Errors and warnings
// A Richer PWA Install Ul won't be available on desktop. Please add at least one screenshot with the "form_factor" set to "wide".
// A Richer PWA Install Ul won't be available on mobile. Please add at least one screenshot for which "form_factor" is not set or set to a value other than "wide".

// TODO https://vite-pwa-org.netlify.app/frameworks/react

export const vitePwaConfig = ({ isDev, outDir }: IViteConfigParams) =>
  VitePWA({
    registerType: "autoUpdate",
    injectRegister: "auto",
    minify: true,
    outDir,
    devOptions: {
      enabled: isDev,
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg}"],
      cleanupOutdatedCaches: true,
      skipWaiting: true,
    },
    manifest: {
      name: "Yul Yort",
      short_name: "Yul Yort",
      description: "Yul Yort",
      lang: "ru",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
      start_url: ".",
      icons: [
        {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
        {
          src: "/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          src: "/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          src: "/favicon.ico",
          sizes: "48x48",
          type: "image/x-icon",
        },
      ],
    },
  });
