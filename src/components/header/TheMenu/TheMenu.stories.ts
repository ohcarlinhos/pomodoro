import vueRouter from "storybook-vue3-router";
import TheMenu, { TheMenuProps } from "./TheMenu.vue";
import { menu } from "./util/mock";

export default {
  title: "Header / TheMenu",
  component: TheMenu,
  args: {
    ...menu,
  } as TheMenuProps,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
  decorators: [vueRouter()],
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
