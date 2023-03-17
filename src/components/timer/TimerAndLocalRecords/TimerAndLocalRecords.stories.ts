import TimerAndLocalRecords from ".";

export default {
  title: "Timer / TimerAndLocalRecords",
  component: TimerAndLocalRecords,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Component = () => ({
  components: { TimerAndLocalRecords },
  template: `
    <div class="default--storybook w-500">
      <TimerAndLocalRecords v-bind="args" />
    </div>
  `,
});
