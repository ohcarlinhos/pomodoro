<script setup lang="ts">
import { onMounted, reactive } from "vue";

import TableUI, { type TableUIProps } from "@/components/ui/table/TableUI.vue";

import type { TableUIOrder } from "@/components/ui/table/TableUI.types";
import {
  makeColumnsByRecords,
  tableActions,
  tableColumns,
} from "./RecordListPage.util";

import { recordsAPI } from "@/services";
import InputSearchUI from "../../components/ui/input-search/InputSearchUI.vue";
import ButtonUI from "../../components/ui/button/ButtonUI.vue";

const table = reactive<TableUIProps>({
  columns: [],
  lines: [],
  actions: [],
});

onMounted(async () => {
  table.columns = tableColumns();
  const records = await recordsAPI.get();
  table.lines = makeColumnsByRecords(records);
  table.actions = [...tableActions()];
});

const toggleOrder = (payload: TableUIOrder) => {
  table.columns.forEach((column) => {
    if (column.label == payload.column.label) {
      column.order = payload.order == "desc" ? "asc" : "desc";
    }
    return column;
  });
};
</script>

<template>
  <div class="record__container">
    <div class="action__area">
      <InputSearchUI size="lg" />
      <ButtonUI class="add-button" label="Adicionar Registro" />
    </div>

    <div class="info__area">
      <div class="timer__area white-bg">Timer</div>
      <div class="table__area white-bg">
        <TableUI v-bind="table" @table:order="toggleOrder" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.record__container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
}

.white-bg {
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}

.info__area {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
}

.timer__area {
  width: 100%;
  max-width: 400px;
}
.table__area {
  width: 100%;
}

.action__area {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 15px;

  .add-button {
    width: 100%;
    max-width: 250px;
  }
}
</style>
