import TheNav from "./TheNav.vue";
import { navLinks } from "./util/mock";

export default {
  title: "NAV / TheNav",
  component: TheNav,
  args: {
    label: "Link",
    a: true,
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
      <TheNav v-bind="args" />
    </div>
  `,
});
