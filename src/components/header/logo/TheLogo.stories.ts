import TheLogo from "./TheLogo.vue";
import { logo } from "./util/mock";

export default {
  title: "Header / TheLogo",
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
