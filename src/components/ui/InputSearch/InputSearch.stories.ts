import InputSearch from "./InputSearch.vue";

export default {
  title: "UI / Input / InputSearch",
  component: InputSearch,
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
  components: { InputSearch },
  setup() {
    return { args };
  },
  template: `
    <div class="default--storybook w-400">
      <InputSearch v-bind="args" />
    </div>
  `,
});
