<script setup lang="ts">
import { onMounted, reactive } from "vue";

import TableUI, { type TableUIProps } from "@/components/ui/table/TableUI.vue";
import InputSearchUI from "@/components/ui/input-search/InputSearchUI.vue";
import ButtonUI from "@/components/ui/button/ButtonUI.vue";
import type { ModalStateInterface } from "@/components/modal/modal-factory/ModalFactory.vue";
import type { RecordModalProps } from "@/components/modal/record/RecordModal.vue";

import type { TableUIOrderPayload } from "@/components/ui/table/TableUI.types";
import {
  makeTableLinesByRecords,
  tableActions,
  tableColumns,
} from "./RecordListPage.util";

import { useModal } from "@/hooks/useModal";
import { recordsAPI } from "@/services";
import TimerAndLocalRecords from "../../components/timer/timer-and-local-records/TimerAndLocalRecords.vue";

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
    table.lines = makeTableLinesByRecords(records);
    table.actions = [...tableActions()];
  } catch (err) {
    console.log("Erro na requisição");
  }
});

const toggleOrder = (payload: TableUIOrderPayload) => {
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
    <div class="timer__area">
      <TimerAndLocalRecords />
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
