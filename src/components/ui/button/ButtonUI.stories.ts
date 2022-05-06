import ButtonUI from "./ButtonUI.vue";
import "./util/storybook.css";

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
    <div class="button-ui--storybook">  
      <ButtonUI v-bind="args" />
    </div>
  `,
});
