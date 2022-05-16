import TableUI from "./TableUI.vue";

import "./util/storybook.css";
import { tableLines, tableColumns, tableActions } from "./util/mock";

export default {
  title: "UI / TableUI",
  component: TableUI,
  args: {
    actions: tableActions(),
    columns: tableColumns(),
    lines: tableLines(),
    desing: "",
  },
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Component = (args: unknown) => ({
  components: { TableUI },
  setup() {
    return { args };
  },
  template: `
    <div class="table-ui--storybook">
      <div class="table">
        <TableUI v-bind="args" />
      </div>
    </div>
  `,
});

export const EmptyText = () => ({
  components: { TableUI },
  template: `
    <div class="table-ui--storybook">
      <div class="table">
        <TableUI v-bind="args" />
      </div>
    </div>
  `,
});
