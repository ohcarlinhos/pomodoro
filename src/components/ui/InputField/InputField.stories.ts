import InputField from "./InputField.vue";

export default {
  title: "UI / Input / InputField",
  component: InputField,
  args: {
    id: "default",
    label: "Look this Input:",
    placeholder: "Bla, bla, bla... Placeholder.",
    type: "text",
    mask: "(##)  ####-####, (##) # ####-####",
  },
  argTypes: {
    id: { type: "string" },
    label: { type: "string" },
    type: { type: "string" },
    mask: { type: "string" },
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Component = (args: { mask: string }) => ({
  components: { InputField },
  setup() {
    return {
      args: {
        ...args,
        mask: args.mask
          .trim()
          .split(",")
          .map((i) => i.trim()),
      },
    };
  },
  template: `
    <div class="default--storybook w-400">
      <InputField v-bind="args" />
    </div>
  `,
});
