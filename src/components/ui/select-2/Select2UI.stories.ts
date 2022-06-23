import TheComponent from ".";

export default {
  title: "Test / Select2UI",
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
    return { args };
  },
  template: `
    <div class="default--storybook w-400">  
      <TheComponent v-bind="args" />
    </div>
  `,
});
