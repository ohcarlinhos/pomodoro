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

import { useModal } from "@/hooks/useModal";
import type { ModalStateInterface } from "@/components/modal/modal-factory/ModalFactory.vue";
import type { RecordModalProps } from "@/components/modal/record/RecordModal.vue";

import DigitalTimer from "../../components/timer/digital-timer/DigitalTimer.vue";

const modal = useModal();

const table = reactive<TableUIProps>({
  columns: [],
  lines: [],
  actions: [],
});

onMounted(async () => {
  table.columns = tableColumns();

  try {
    const records = await recordsAPI.get();
    table.lines = makeColumnsByRecords(records);
    table.actions = [...tableActions()];
  } catch (err) {
    console.log("Erro na requisição");
  }
});

const toggleOrder = (payload: TableUIOrder) => {
  table.columns.forEach((column) => {
    if (column.label == payload.column.label) {
      column.order = payload.order == "desc" ? "asc" : "desc";
    }
    return column;
  });
};

const openRecordModal = () => {
  modal.open<ModalStateInterface<RecordModalProps>>({
    name: "record-form",
    props: {},
  });
};
</script>

<template>
  <div class="record__container">
    <div class="timer__area white-bg">
      <DigitalTimer />
    </div>

    <div class="info__area">
      <div class="action__area">
        <InputSearchUI size="lg" />
        <ButtonUI
          class="add-button"
          label="Adicionar Registro"
          @click="openRecordModal"
        />
      </div>

      <div class="table__area white-bg">
        <TableUI v-bind="table" @table:order="toggleOrder" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./RecordListPage.scss";
</style>
