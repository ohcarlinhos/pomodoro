import InputUI from "./InputUI.vue";
import "./util/storybook.css";

export default {
  title: "UI / InputUI",
  component: InputUI,
  args: {
    id: "default",
    label: "Look this Input:",
    placeholder: "Bla, bla, bla... Placeholder.",
    type: "text",
  },
  argTypes: {
    id: { type: "string" },
    label: { type: "string" },
    type: { type: "string" },
  },
};

export const Component = (args) => ({
  components: { InputUI },
  setup() {
    return { args };
  },
  template: `
    <div class="input-ui--storybook">
      <InputUI v-bind="args" />
    </div>
  `,
});