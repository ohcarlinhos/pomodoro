import { createApp } from "vue";
import { createPinia } from "pinia";
import VueGtag from "vue-gtag";

import App from "./App.vue";
import router from "./router";

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

app.mount("#app");
