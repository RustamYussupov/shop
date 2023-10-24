// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/scss/index.scss"],
  alias: {
    "@": resolve(__dirname, "/"),
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./assets/scss/variables/main.scss";',
        },
      },
    },
  },
  modules: ["vue3-carousel-nuxt"],
});
