import Link from "./Link.vue";
import "./util/storybook.css";

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
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Component = (args: unknown) => ({
  components: { Link },
  setup() {
    return { args };
  },
  template: `
    <div class="link--storybook">  
      <Link v-bind="args" />
    </div>
  `,
});
