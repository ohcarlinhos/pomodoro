import PaginationUI from "./PaginationUI.vue";

export default {
  title: "UI / PaginationUI",
  component: PaginationUI,
  args: {
    size: 35,
    perPage: 10,
    firstPage: 1,
    selected: 1,
  },
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Component = (args: unknown) => ({
  components: { PaginationUI },
  setup() {
    return { args };
  },
  template: `
    <div class="default--storybook">
      <PaginationUI v-bind="args" />
    </div>
  `,
});
