import { fileURLToPath, URL } from "url";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import { dirname, resolve } from "path";

export default defineConfig({
  plugins: [
    Vue(),
    VueI18nPlugin({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./src/i18n/locales/**"
      ),
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
