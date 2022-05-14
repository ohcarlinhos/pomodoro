import TheMenu from "./TheMenu.vue";
import { menu } from "./util/mock";

export default {
  title: "Header / TheMenu",
  component: TheMenu,
  args: {
    ...menu,
  },
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Component = (args: unknown) => ({
  components: { TheMenu },
  setup() {
    return { args };
  },
  template: `
    <div class="default--storybook no-p">
      <TheMenu v-bind="args" />
    </div>
  `,
});
