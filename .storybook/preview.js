export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import { provide } from "../src/styles/theme";

import "../src/styles/reset.css";
import "../src/styles/root.css";

export const decorators = [
  (story) => ({
    components: { story },
    provide,
    template: `<story />`,
  }),
];
