import {
  tableActions,
  tableColumns,
  tableLines,
} from "../../ui/TheTable/util/mock";
import SimpleTable from "./SimpleTable.vue";

import "../../ui/TheTable/util/storybook.css";

const lines = [...tableLines("Coluna", 35)];
const actions = [...tableActions()];
const columns = [...tableColumns()];

export default {
  title: "Table / SimpleTable",
  component: SimpleTable,
  args: {
    actions,
    columns,
    lines,
    perPage: 5,
  },
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Component = (args: unknown) => ({
  components: { SimpleTable },
  setup() {
    return {
      args,
    };
  },
  template: `
      <div class="table-ui--storybook">
        <div class="custom-table">
          <SimpleTable v-bind="args" />
        </div>
      </div>
    `,
});
