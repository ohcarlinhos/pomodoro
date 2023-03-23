import { createApp } from "vue";
import { createPinia } from "pinia";

import Toast, { POSITION, type PluginOptions } from "vue-toastification";
import VueGtag from "vue-gtag";

import "the-new-css-reset/css/reset.css";
import "vue-toastification/dist/index.css";
import "vue-multiselect/dist/vue-multiselect.css";
import "../src/assets/root.css";

import App from "./App.vue";
import router from "./router";
import { i18n } from "./i18n";

const app = createApp(App);
export const store = createPinia();

const toastOptions: PluginOptions = {
  position: POSITION.BOTTOM_LEFT,
};

app.use(store);
app.use(router);
app.use(i18n);
app.use(VueGtag, { config: { id: "G-M9CECX79MT" } }, router);
app.use(Toast, toastOptions);

app.mount("#app");
