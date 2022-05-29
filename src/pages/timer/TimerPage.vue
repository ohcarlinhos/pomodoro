<script setup lang="ts">
import { computed, onMounted, reactive } from "vue";
import dayjs from "dayjs";

import localizedFormatDayJs from "dayjs/plugin/localizedFormat";
import localeDayJs from "dayjs/locale/pt-br";
import { zeroLeft } from "@/util/functions";

import DigitalTimer from "@/components/timer/digital-timer/DigitalTimer.vue";
import SimpleTable, {
  type SimpleTableProps,
} from "@/components/table/simple-table/SimpleTable.vue";
import type { TimerUIDonePayload } from "@/components/ui/timer/TimerUI.types";

import {
  makeTableLinesByLocalRecords,
  tableActions,
  tableColumns,
} from "./TimerPage.util";

import { useLocalRecordsStore } from "@/stores/localRecords";
import type { TableUIActionPayload } from "@/components/ui/table/TableUI.types";

dayjs.extend(localizedFormatDayJs);
dayjs.locale(localeDayJs);

const localRecords = useLocalRecordsStore();

const table = reactive<SimpleTableProps>({
  columns: [],
  actions: [],
  perPage: 4,
});

onMounted(async () => {
  table.columns = tableColumns();
  table.actions = tableActions();
  localRecords.requestRecords();
});

const localRecordsLines = computed(() => {
  return makeTableLinesByLocalRecords(localRecords.getRecords);
});

const doneAction = (payload: TimerUIDonePayload) => {
  const { date } = payload;
  const day = dayjs(date).format("DD/MM/YYYY");

  const whenFinished = `${zeroLeft(dayjs(date).hour())}: ${zeroLeft(
    dayjs(date).minute()
  )}`;

  localRecords.addRecord(day, whenFinished, payload.seconds);
};

const handleAction = (payload: TableUIActionPayload) => {
  const { action, line } = payload;
  if (action == "delete") localRecords.deleteRecord(line.id as string);
};
</script>

<template>
  <div class="page__container">
    <h2 class="page__title">🍅 Pomodoro</h2>

    <div class="timer__area white-bg">
      <DigitalTimer :done-action="doneAction" />
    </div>

    <div class="timer__area white-bg">
      <SimpleTable
        v-bind="table"
        :lines="localRecordsLines"
        @table:action="handleAction"
      />
    </div>

    <div class="page__footer">
      <span class="warning">🚧 Aplicativo em construção! 🚧</span>
      <br />
      <span>
        Desenvolvido por
        <a href="https://github.com/caarlos1" target="_blank">@caarlos1</a>.
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./TimerPage.scss";
</style>
