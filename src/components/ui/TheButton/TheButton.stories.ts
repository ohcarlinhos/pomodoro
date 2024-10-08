import TheButton from "./TheButton.vue";

export default {
  title: "UI / TheButton",
  component: TheButton,
  args: {
    label: "Just a simple button...",
    design: "help",
    disabled: false,
    radius: true,
    full: false,
    size: "",
  },
  argTypes: {
    label: { type: "string" },
    design: { type: "string" },
    disabled: { type: "boolean" },
    full: { type: "boolean" },
    radius: { type: "boolean" },
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Component = (args: unknown) => ({
  components: { TheButton },
  setup() {
    return { args };
  },
  template: `
    <div class="default--storybook w-400">  
      <TheButton v-bind="args" />
    </div>
  `,
});
