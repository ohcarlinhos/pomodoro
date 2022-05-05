import TableUI from "./TableUI.vue";

import "./util/storybook.css";
import { tableLines, tableColumns } from "./util/mock";

export default {
  title: "UI / TableUI",
  component: TableUI,
  args: {
    options: false,
    columns: tableColumns(),
    lines: tableLines(),
    desing: "",
  },
  argTypes: {},
};

export const Component = (args) => ({
  components: { TableUI },
  setup() {
    return { args };
  },
  template: `
    <div class="table-ui--storybook">
      <TableUI v-bind="args" />
    </div>
  `,
});
