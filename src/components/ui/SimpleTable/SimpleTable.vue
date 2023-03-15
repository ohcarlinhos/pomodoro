<script setup lang="ts">
import { reactive, computed } from "vue";

import type {
  TheTableAction,
  TheTableActionPayload,
  TheTableColumn,
  TheTableLine,
} from "@/components/ui/TheTable/TheTable.types";
import TheTable from "@/components/ui/TheTable";

export interface SimpleTableProps {
  actions?: TheTableAction[];
  columns: TheTableColumn[];
  lines?: TheTableLine[];
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

const emit = defineEmits(["table:action"]);

const table = reactive({
  page: 1,
});

const pageLines = computed(() => {
  const lastItem = table.page * props.perPage;
  const pageItems: TheTableLine[] = [];

  props.lines.forEach((line, index) => {
    if (index + 1 <= lastItem && index >= lastItem - props.perPage)
      pageItems.push(line);
  });
  return pageItems;
});

const selectPage = (page: number) => {
  table.page = page;
};

const handleAction = (payload: TheTableActionPayload) => {
  emit("table:action", payload);
};
</script>

<template>
  <div class="table__container">
    <TheTable
      v-bind="props"
      :lines="pageLines"
      :total-items="lines.length"
      :selected-page="table.page"
      :select-page="selectPage"
      @table:action="handleAction"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "./SimpleTable.scss";
</style>
