import InputSearchUI from "./InputSearchUI.vue";

export default {
  title: "UI / InputSearchUI",
  component: InputSearchUI,
  args: {
    placeholder: "Pesquisar",
  },
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Component = (args: unknown) => ({
  components: { InputSearchUI },
  setup() {
    return { args };
  },
  template: `
    <div class="default--storybook w-400">
      <InputSearchUI v-bind="args" />
    </div>
  `,
});
