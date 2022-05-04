<script setup lang="ts">
import { onMounted, reactive } from "vue";
import CenterTemplate from "@/templates/center/CenterTemplate.vue";
import TableUI from "@/components/ui/table/TableUI.vue";
import type {
  TableUIColumn,
  TableUILine,
} from "@/components/ui/table/TableUI.types";
import { makeColumnsByRecords } from "./RecordListPage.util";
import { recordsAPI } from "@/services";

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
  <CenterTemplate>
    <div class="table">
      <TableUI :columns="table.columns" :lines="table.lines" />
    </div>
  </CenterTemplate>
</template>

<style scoped lang="sass">
@import "./RecordListPage"
</style>
