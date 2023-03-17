import { RouteRecordRaw } from "vue-router";
import vueRouter from "storybook-vue3-router";
import TheLink, { TheLinkProps } from "./TheLink.vue";

const routerLink: RouteRecordRaw = {
  path: `/exemple`,
  name: `#`,
  component: {
    template: `<p class="example__container">Route Example</p>`,
  },
};

export default {
  title: "UI / TheLink",
  component: TheLink,
  args: {
    id: "link",
    label: "Just a simple link...",
    target: "_blank",
    url: "#",
    a: true,
    disabled: false,
  } as TheLinkProps,
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
  decorators: [vueRouter([routerLink])],
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
