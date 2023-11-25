import { VitePWA } from "vite-plugin-pwa";
import { IViteConfigParams } from "./vite.config.types";

export const vitePwaConfig = ({ isDev, outDir }: IViteConfigParams) =>
  VitePWA({
    registerType: "autoUpdate",
    injectRegister: "auto",
    outDir,
    devOptions: {
      enabled: isDev,
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg}"],
    },
    includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
    manifest: {
      name: "Yul Yort",
      short_name: "Yul Yort",
      description: "Yul Yort",
      lang: "ru",
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
