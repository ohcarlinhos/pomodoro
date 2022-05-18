<script setup lang="ts">
import { onMounted, reactive } from "vue";

import TableUI, { type TableUIProps } from "@/components/ui/table/TableUI.vue";

import type {
  TableUIAction,
  TableUIOrder,
} from "@/components/ui/table/TableUI.types";
import { makeColumnsByRecords } from "./RecordListPage.util";

import { recordsAPI } from "@/services";
import InputSearchUI from "../../components/ui/input-search/InputSearchUI.vue";

const table = reactive<TableUIProps>({
  columns: [],
  lines: [],
  actions: [],
});

const tableActions = (): TableUIAction[] => [
  {
    id: 1,
    label: "Editar",
    disabled: false,
    action: "edit",
    icon: "edit",
  },
  {
    id: 2,
    label: "Excluir",
    disabled: false,
    action: "delete",
    icon: "delete",
  },
];

onMounted(async () => {
  table.columns = [
    { label: "Nome", sort: true, width: "33%" },
    { label: "Categoria" },
    { label: "Tags" },
    { label: "Data" },
    { label: "Finalizado às" },
    { label: "Tempo" },
  ];

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
    <InputSearchUI size="lg" />

    <div class="form__area">
      <TableUI v-bind="table" @table:order="toggleOrder" />
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

.form__area {
  width: 100%;
}
</style>
