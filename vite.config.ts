import { fileURLToPath, URL } from "url";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [
    Vue(),
    VueI18nPlugin({
      include: [path.resolve(__dirname, "./i18n/locales/**")],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ["oh-vue-icons/icons"],
  },
});
