<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { useToast } from "vue-toastification";

import { tableColumns, makeTableLinesByRecords, tableActions } from ".";

import TableUI, { type TableUIProps } from "@/components/ui/table";
import InputSearchUI from "@/components/ui/input-search";
import TheButton from "@/components/ui/button";
import type { ModalStateInterface } from "@/components/modal/modal-factory/types";
import type { RecordModalProps } from "@/components/modal/record/RecordModal.vue";
import TimerAndLocalRecords from "@/components/timer/timer-and-local-records";

import type {
  TableUIActionPayload,
  TableUIOrderPayload,
} from "@/components/ui/table/TableUI.types";

import { useModal } from "@/hooks/useModal";
import { recordsAPI } from "@/services";

const modal = useModal();
const toast = useToast();

const table = reactive<TableUIProps>({
  columns: [],
  lines: [],
  actions: [],
});

onMounted(async () => {
  await requestRecords();
  table.columns = tableColumns();
});

const requestRecords = async () => {
  try {
    const records = await recordsAPI.get();
    table.lines = makeTableLinesByRecords(records);
    table.actions = [...tableActions()];
  } catch (err) {
    toast.error("Ocorreu um erro ao tentar obter os registros.");
  }
};

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
    props: {
      finalAction: closeModalAndUpdate,
    },
  });
};

const closeModalAndUpdate = async () => {
  await requestRecords();
};

const handleTableActions = async (payload: TableUIActionPayload) => {
  if (payload.action == "delete")
    if (table.lines && table.lines.length) {
      try {
        await recordsAPI.delete(`${payload.line.id}`);
        const index = table.lines?.findIndex(
          (line) => line.id == payload.line.id
        );
        table.lines?.splice(index, 1);
        toast.success("Removido com sucesso!");
      } catch (err) {
        toast.error("Ocorreu um erro ao tentar excluir o registro.");
      }
    }
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
        <TheButton
          class="add-button"
          design="primary"
          label="Adicionar Registro"
          @click="openRecordModal"
        />
      </div>

      <div class="table__area white-bg">
        <TableUI
          v-bind="table"
          @table:order="toggleOrder"
          @table:action="handleTableActions"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./PanelPage.scss";
</style>
