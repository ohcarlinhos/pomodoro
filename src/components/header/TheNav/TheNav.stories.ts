import vueRouter from "storybook-vue3-router";
import TheNav from "./TheNav.vue";
import { navLinks, routerLinks } from "./util/mock";

export default {
  title: "NAV / TheNav",
  component: TheNav,
  args: {
    label: "Link",
    a: true,
    links: () => [],
  },
  argTypes: {
    label: "string",
    a: "boolean",
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
  decorators: [vueRouter(routerLinks(5))],
};

export const Component = (args: { label: string; a: boolean }) => ({
  components: { TheNav },
  setup() {
    return {
      args: {
        ...args,
        links: navLinks(args.label, 5, args.a),
      },
    };
  },
  template: `
    <div class="default--storybook">  
      <TheNav v-bind="args" />
      <RouterView />
    </div>
  `,
});
