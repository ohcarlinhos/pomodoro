<script setup lang="ts">
import { onMounted, reactive } from "vue";

import TableUI from "@/components/ui/table/TableUI.vue";

import type {
  TableUIColumn,
  TableUILine,
} from "@/components/ui/table/TableUI.types";
import { makeColumnsByRecords } from "./RecordListPage.util";

import { recordsAPI } from "@/services";
import InputSearchUI from "../../components/ui/input-search/InputSearchUI.vue";

interface TableData {
  columns: TableUIColumn[];
  lines: TableUILine[];
}

const table = reactive<TableData>({
  columns: [],
  lines: [],
});

onMounted(async () => {
  table.columns = [
    { label: "Nome" },
    { label: "Categoria" },
    { label: "Tags" },
    { label: "Data" },
    { label: "Finalizado às" },
    { label: "Tempo" },
  ];

  const records = await recordsAPI.get();
  table.lines = makeColumnsByRecords(records);
});
</script>

<template>
  <div class="record__container">
    <InputSearchUI size="lg" rounded />

    <div class="form__area">
      <TableUI :columns="table.columns" :lines="table.lines" />
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
