import { createApp } from "vue";
import { createPinia } from "pinia";

import Toast, { POSITION, type PluginOptions } from "vue-toastification";
import VueGtag from "vue-gtag";

import "vue-toastification/dist/index.css";

import App from "./App.vue";
import router from "./router";

const options: PluginOptions = {
  position: POSITION.BOTTOM_LEFT,
};

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(
  VueGtag,
  {
    config: {
      id: "G-M9CECX79MT",
    },
  },
  router
);
app.use(Toast, options);

app.mount("#app");
