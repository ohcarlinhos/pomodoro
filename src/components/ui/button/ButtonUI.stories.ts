import ButtonUI from "./ButtonUI.vue";

export default {
  title: "UI / ButtonUI",
  component: ButtonUI,
  args: {
    label: "Just a simple button...",
    design: "",
    disabled: false,
    full: false,
  },
  argTypes: {
    label: { type: "string" },
    design: { type: "string" },
    disabled: { type: "boolean" },
    full: { type: "boolean" },
  },
};

export const Component = (args: unknown) => ({
  components: { ButtonUI },
  setup() {
    return { args };
  },
  template: '<ButtonUI v-bind="args" />',
});
