import vueRouter from "storybook-vue3-router";
import TheNav, { TheNavProps } from "./TheNav.vue";
import { navLinks, routerLinks } from "./util/mock";

interface ArgsTheNavStorie {
  label: string;
  a: boolean;
  props: TheNavProps;
}

export default {
  title: "Header / TheNav",
  component: TheNav,
  args: {
    label: "Link",
    a: false,
    props: { links: [] },
  } as ArgsTheNavStorie,
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

export const Component = (args: ArgsTheNavStorie) => ({
  components: { TheNav },
  setup() {
    return {
      args: {
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
