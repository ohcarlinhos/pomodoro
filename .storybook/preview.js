export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import "the-new-css-reset/css/reset.css";
import "../src/assets/root.css";
import "vue-multiselect/dist/vue-multiselect.css";

import "../src/assets/storybook.scss";

export const decorators = [
  (story) => ({
    components: { story },
    template: `
      <div class="storybook--root">
        <story />
      </div>`,
  }),
];
