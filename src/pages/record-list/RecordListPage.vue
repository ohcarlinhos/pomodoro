<script setup lang="ts">
import { onMounted, reactive } from "vue";
import DefaultTemplate from "@/templates/DefaultTemplate.vue";
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
  <DefaultTemplate>
    <template #body>
      <div class="page">
        <div class="table">
          <TableUI :columns="table.columns" :lines="table.lines" />
        </div>
      </div>
    </template>
  </DefaultTemplate>
</template>

<style scoped lang="sass">
@media (min-width: 1024px)
  .page
    height: 100%
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    filter: drop-shadow(0px 4px 19px rgba(0, 0, 0, 0.1))

    .table
      width: 100%
      max-width: 1000px
</style>
