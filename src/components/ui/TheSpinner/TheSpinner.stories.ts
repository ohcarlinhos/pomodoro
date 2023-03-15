import TheSpinner from "./TheSpinner.vue";

export default {
  title: "UI / TheSpinner",
  component: TheSpinner,
  args: {
    size: 4,
  },
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Component = (args: unknown) => ({
  components: { TheSpinner },
  setup() {
    return {
      args,
    };
  },
  template: `
    <div class="default--storybook">
      <TheSpinner v-bind="args" />
    </div>
  `,
});
