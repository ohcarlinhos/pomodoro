import Nav from "./Nav.vue";
import { navLinks } from "./util/mock";

export default {
  title: "NAV / Nav",
  component: Nav,
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
  components: { Nav },
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
