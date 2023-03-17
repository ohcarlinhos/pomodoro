import SimpleTimer from ".";

export default {
  title: "Timer / SimpleTimer",
  component: SimpleTimer,
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
  components: { SimpleTimer },
  setup() {
    return {
      args,
    };
  },
  template: `
    <div class="default--storybook w-350">
      <SimpleTimer v-bind="args" />
    </div>
  `,
});
