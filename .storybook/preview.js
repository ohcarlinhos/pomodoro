import { app } from "@storybook/vue3";
import { store } from "../src/main";
import { i18n } from "../src/i18n";

import "the-new-css-reset/css/reset.css";
import "../src/assets/root.css";
import "vue-multiselect/dist/vue-multiselect.css";

import "../src/assets/storybook.scss";

app.use(store);
app.use(i18n);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (story) => ({
    components: { story },
    template: `
      <div class="storybook--root">
        <story />
      </div>`,
  }),
];
