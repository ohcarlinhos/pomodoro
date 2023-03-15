import ThePagination from "./ThePagination.vue";

export default {
  title: "UI / ThePagination",
  component: ThePagination,
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
  components: { ThePagination },
  setup() {
    return { args };
  },
  template: `
    <div class="default--storybook">
      <ThePagination v-bind="args" />
    </div>
  `,
});
