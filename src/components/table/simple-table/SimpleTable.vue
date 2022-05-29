<script setup lang="ts">
import TableUI from "../../ui/table/TableUI.vue";
import { reactive, onMounted, computed } from "vue";
import type {
  TableUIAction,
  TableUIColumn,
  TableUILine,
} from "../../ui/table/TableUI.types";

export interface SimpleTableProps {
  actions?: TableUIAction[];
  columns: TableUIColumn[];
  lines: TableUILine[];
  design?: string;
  perPage?: number;
}

const props = withDefaults(defineProps<SimpleTableProps>(), {
  actions: () => [],
  columns: () => [],
  lines: () => [],
  design: "",
  perPage: 10,
});

const table = reactive({
  page: 1,
});

const pageLines = computed(() => {
  const lastItem = table.page * props.perPage;
  const pageItems: TableUILine[] = [];

  props.lines.forEach((line, index) => {
    if (index + 1 <= lastItem && index >= lastItem - props.perPage)
      pageItems.push(line);
  });
  return pageItems;
});

const selectPage = (page: number) => {
  table.page = page;
};
</script>

<template>
  <div class="table__container">
    <TableUI
      v-bind="props"
      :lines="pageLines"
      :total-items="lines.length"
      :selected-page="table.page"
      :select-page="selectPage"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "./SimpleTable.scss";
</style>
