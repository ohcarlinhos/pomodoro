import ButtonUI from "./ButtonUI.vue";

export default {
  title: "UI / ButtonUI",
  component: ButtonUI,
  args: {
    label: "Just a simple button...",
    design: "",
    disabled: false,
    radius: true,
    full: false,
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
  components: { ButtonUI },
  setup() {
    return { args };
  },
  template: `
    <div class="default--storybook w-400">  
      <ButtonUI v-bind="args" />
    </div>
  `,
});
