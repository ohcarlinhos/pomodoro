import TheNav from "./TheNav.vue";
import { navLinks } from "./util/mock";

export default {
  title: "NAV / Nav",
  component: TheNav,
  args: {
    label: "Link",
    a: false,
    size: 5,
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
};

export const Component = (args: {
  label: string;
  size: number;
  a: boolean;
}) => ({
  components: { TheNav },
  setup() {
    return {
      args: {
        ...args,
        links: navLinks(args.label, args.size, args.a),
      },
    };
  },
  template: `
    <div class="default--storybook">  
      <Nav v-bind="args" />
    </div>
  `,
});
