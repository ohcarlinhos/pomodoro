import TheLink from "./TheLink.vue";

export default {
  title: "NAV / TheLink",
  component: TheLink,
  args: {
    id: "link",
    label: "Just a simple link...",
    url: "#target",
    a: false,
    disabled: false,
  },
  argTypes: {
    label: { type: "string" },
    url: { type: "string" },
    a: { type: "boolean" },
    disabled: { type: "boolean" },
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Component = (args: unknown) => ({
  components: { TheLink },
  setup() {
    return { args };
  },
  template: `
    <div class="default--storybook">  
      <TheLink v-bind="args" />
    </div>
  `,
});
