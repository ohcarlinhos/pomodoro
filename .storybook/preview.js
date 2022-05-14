export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import "../src/assets/reset.css";
import "../src/assets/root.css";
import "../src/assets/storybook.css";

export const decorators = [
  (story) => ({
    components: { story },
    template: `
      <div class="storybook--root">
        <story />
      </div>`,
  }),
];
