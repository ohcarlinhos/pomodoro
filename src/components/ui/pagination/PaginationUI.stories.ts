import PaginationUI from "./PaginationUI.vue";

export default {
  title: "UI / PaginationUI",
  component: PaginationUI,
  args: {
    size: 20,
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
      <div class="table">
        <PaginationUI v-bind="args" />
      </div>
    </div>
  `,
});
