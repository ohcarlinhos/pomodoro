import Link from "./Link.vue";

export default {
  title: "NAV / Link",
  component: Link,
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
};

export const Component = (args: unknown) => ({
  components: { Link },
  setup() {
    return { args };
  },
  template: '<Link v-bind="args" />',
});
