import TheComponent from ".";

export default {
  title: "Timer / SimpleTimer",
  component: TheComponent,
  args: {
    minutes: 25,
    seconds: 0,
  },
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
