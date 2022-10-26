// Disabled due to incompatibility of "VueUse" with the storybook.
import TheComponent from ".";

export default {
  title: "Timer / DigitalTimer",
  component: TheComponent,
  args: {},
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Component = (args: unknown) => ({
  components: { TheComponent },
  setup() {
    return {
      args,
    };
  },
  template: `
    <div class="default--storybook w-350">
      <TheComponent v-bind="args" />
    </div>
  `,
});
