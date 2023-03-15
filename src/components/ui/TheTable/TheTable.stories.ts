import TheTable from "./TheTable.vue";

import "./util/storybook.css";
import { tableLines, tableColumns, tableActions } from "./util/mock";

const lines = tableLines("Linha", 35);
const actions = [...tableActions()];
const columns = [...tableColumns()];

export default {
  title: "UI / TheTable",
  component: TheTable,
  args: {
    perPage: 7,
    firstPage: 1,
    selectedPage: 1,
    totalItems: 35,
    design: "",
    actions,
    columns,
    lines,
  },
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const Component = (args: unknown) => ({
  components: { TheTable },
  setup() {
    return {
      args,
    };
  },
  template: `
    <div class="table-ui--storybook">
      <div class="table">
        <TheTable v-bind="args" />
      </div>
    </div>
  `,
});

export const Example = (args: unknown) => ({
  components: { TheTable },
  setup() {
    return { args };
  },
  template: `
    <div class="table-ui--storybook">
      <div class="custom-table">
        <TheTable v-bind="args" />
      </div>
    </div>
  `,
});

export const EmptyText = () => ({
  components: { TheTable },
  template: `
    <div class="table-ui--storybook">
      <div class="table">
        <TheTable v-bind="args" />
      </div>
    </div>
  `,
});
