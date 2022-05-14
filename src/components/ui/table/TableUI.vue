<script setup lang="ts">
import type { TableUIColumn, TableUILine } from "./TableUI.types";

type TableUIProps = {
  options?: boolean;
  columns: TableUIColumn[];
  lines: TableUILine[];
  design?: string;
};

withDefaults(defineProps<TableUIProps>(), {
  options: false,
  columns: () => [],
  lines: () => [],
  desing: "",
});
</script>

<template>
  <div class="table__containter">
    <table class="table__table" v-if="columns.length || lines.length">
      <tr>
        <th v-for="column in columns" :key="column.label">
          {{ column.label }}
        </th>
        <th v-if="options" class="options">...</th>
      </tr>

      <tr v-for="line in lines" :key="line.label">
        <td v-for="column in line.columns" :key="column.label">
          {{ column.label }}
        </td>
        <td v-if="options" class="options">...</td>
      </tr>
    </table>
    <div class="empty__text" v-if="lines.length == 0">
      Nenhum registro encontrado.
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./TableUI.scss";
</style>
