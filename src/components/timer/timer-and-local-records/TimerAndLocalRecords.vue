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
} from "./TimerAndLocalRecords.util";

import { useLocalRecordsStore } from "@/stores/localRecords";
import type { TableUIActionPayload } from "@/components/ui/table/TableUI.types";

dayjs.extend(localizedFormatDayJs);
dayjs.locale(localeDayJs);

const localRecords = useLocalRecordsStore();

const page = reactive({
  title: "",
});

const table = reactive<SimpleTableProps>({
  columns: [],
  actions: [],
  perPage: 4,
});

onMounted(async () => {
  table.columns = tableColumns();
  table.actions = tableActions();
  localRecords.requestRecords();
  page.title = "";
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

  if (page.title) document.title = page.title;
  localRecords.addRecord(day, whenFinished, payload.seconds);
};

const resetAction = () => {
  if (page.title) document.title = page.title;
};

const handleCounter = (counter: string) => {
  if (!page.title) page.title = document.title;
  document.title = `${counter} - ${page.title}`;
};

const handleAction = (payload: TableUIActionPayload) => {
  const { action, line } = payload;
  if (action == "delete") localRecords.deleteRecord(line.id as string);
};
</script>

<template>
  <div class="timer__container">
    <div class="timer__area">
      <DigitalTimer
        :done-action="doneAction"
        :reset-action="resetAction"
        :handle-counter="handleCounter"
      />
    </div>

    <div class="timer__area">
      <SimpleTable
        v-bind="table"
        :lines="localRecordsLines"
        @table:action="handleAction"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./TimerAndLocalRecords.scss";
</style>
