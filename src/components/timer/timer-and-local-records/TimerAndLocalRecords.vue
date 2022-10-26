<script setup lang="ts">
import { computed, onMounted, reactive } from "vue";
import dayjs from "dayjs";

import { util } from ".";

import localizedFormatDayJs from "dayjs/plugin/localizedFormat";
import localeDayJs from "dayjs/locale/pt-br";
import { zeroLeft } from "@/util/functions";

import type { TableUIActionPayload } from "@/components/ui/table";
import SimpleTable, {
  type SimpleTableProps,
} from "@/components/table/simple-table";

import DigitalTimer from "@/components/timer/digital-timer";
import type { SimpleTimerDonePayload } from "@/components/timer/simple-timer";

import { useLocalRecordsStore } from "@/stores/localRecords";

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
  table.columns = util.tableColumns();
  table.actions = util.tableActions();
  page.title = "";
});

const localRecordsLines = computed(() => {
  return util.makeTableLinesByLocalRecords(localRecords.getRecords);
});

const doneAction = (payload: SimpleTimerDonePayload) => {
  const { date } = payload;
  const day = dayjs(date).format("DD/MM/YYYY");

  const whenFinished = `${zeroLeft(dayjs(date).hour())}:${zeroLeft(
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
  <div class="container">
    <div class="card-bg">
      <DigitalTimer
        :done-action="doneAction"
        :reset-action="resetAction"
        :handle-counter="handleCounter"
      />
    </div>

    <div class="card-bg full-area">
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
