import SpinnerUI from "./SpinnerUI.vue";

export default {
  title: "UI / SpinnerUI",
  component: SpinnerUI,
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
  components: { SpinnerUI },
  setup() {
    return {
      args,
    };
  },
  template: `
    <div class="default--storybook">
      <SpinnerUI v-bind="args" />
    </div>
  `,
});
