import vueRouter from "storybook-vue3-router";
import TheLogo from "./TheLogo.vue";
import { logo } from "./util/mock";

export default {
  title: "UI / TheLogo",
  component: TheLogo,
  args: {
    ...logo,
  },
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
  decorators: [vueRouter()],
};

export const Component = (args: unknown) => ({
  components: { TheLogo },
  setup() {
    return { args };
  },
  template: `
    <div class="default--storybook">
      <TheLogo v-bind="args" />
    </div>
  `,
});
