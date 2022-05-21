import TimerUI from "./TimerUI.vue";

export default {
  title: "UI / TimerUI",
  component: TimerUI,
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
  components: { TimerUI },
  setup() {
    return {
      args,
    };
  },
  template: `
    <div class="default--storybook">
      <TimerUI v-bind="args" />
    </div>
  `,
});
