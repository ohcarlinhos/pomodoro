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

export const Empty = Component.bind({});

Empty.args = {
  lines: [],
};
