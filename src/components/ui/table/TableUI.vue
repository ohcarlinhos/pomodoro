<script setup lang="ts">
import { computed } from "vue";
import type { TableUIColumn, TableUILine } from "./TableUI.types";

interface TableUIProps {
  options?: boolean;
  columns: TableUIColumn[];
  lines: TableUILine[];
  design?: string;
}

const props = withDefaults(defineProps<TableUIProps>(), {
  options: false,
  columns: () => [],
  lines: () => [],
  desing: "",
});

const tableClass = computed(() => {
  return {
    options: props.options,
  };
});
</script>

<template>
  <table class="table" :class="tableClass">
    <tr v-if="columns.length">
      <th v-for="column in columns" :key="column.label">
        {{ column.label }}
      </th>
      <th v-if="props.options"></th>
    </tr>

    <tr v-for="line in lines" :key="line.label">
      <td v-for="column in line.columns" :key="column.label">
        {{ column.label }}
      </td>
      <td v-if="props.options">...</td>
    </tr>
  </table>
</template>

<style scoped lang="sass">
@import "./TableUI.sass"
</style>
