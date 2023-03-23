<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { useToast } from "vue-toastification";

import { tableColumns, makeTableLinesByRecords, tableActions } from "./util";

import TheTable, { type TheTableProps } from "@/components/ui/TheTable";
import InputSearch from "@/components/ui/InputSearch";
import TheButton from "@/components/ui/TheButton";
import type { ModalStateInterface } from "@/components/modal/ModalFactory";
import type { RecordModalProps } from "@/components/modal/RecordModal";
import TimerAndLocalRecords from "@/components/timer/TimerAndLocalRecords";

import type {
  TheTableActionPayload,
  TheTableOrderPayload,
} from "@/components/ui/TheTable/TheTable.types";

import { useModal } from "@/hooks/useModal";
import { recordsAPI } from "@/services";

const modal = useModal();
const toast = useToast();

const table = reactive<TheTableProps>({
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

const toggleOrder = (payload: TheTableOrderPayload) => {
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

const handleTableActions = async (payload: TheTableActionPayload) => {
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
        <InputSearch size="lg" />
        <TheButton
          class="add-button"
          design="primary"
          label="Adicionar Registro"
          @click="openRecordModal"
        />
      </div>

      <div class="table__area white-bg">
        <TheTable
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
