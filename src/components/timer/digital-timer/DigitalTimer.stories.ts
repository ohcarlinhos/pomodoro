import DigitalTimer from "./DigitalTimer.vue";

export default {
  title: "Timer / DigitalTimer",
  component: DigitalTimer,
  args: {},
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Component = (args: unknown) => ({
  components: { DigitalTimer },
  setup() {
    return {
      args,
    };
  },
  template: `
    <div class="default--storybook w-350">
      <DigitalTimer v-bind="args" />
    </div>
  `,
});
