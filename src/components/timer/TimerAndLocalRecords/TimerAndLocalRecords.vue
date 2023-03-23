<script setup lang="ts">
import { computed, onMounted, reactive } from "vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";

import dayjs from "dayjs";

import {
  tableColumns,
  tableActions,
  makeTableLinesByLocalRecords,
} from "./TimerAndLocalRecords.util";

import localizedFormatDayJs from "dayjs/plugin/localizedFormat";
import localeDayJs from "dayjs/locale/pt-br";
import { zeroLeft } from "@/util/functions";

import TheButton from "@/components/ui/TheButton";
import type { TheTableActionPayload } from "@/components/ui/TheTable";
import SimpleTable, {
  type SimpleTableProps,
} from "@/components/ui/SimpleTable";

import DigitalTimer from "@/components/timer/DigitalTimer";
import type { SimpleTimerDonePayload } from "@/components/timer/SimpleTimer";

import { useLocalRecordsStore } from "@/stores/localRecords";
import { useStorage, useTitle } from "@vueuse/core";

import {
  MdKeyboardarrowdownRound,
  MdKeyboardarrowupRound,
} from "oh-vue-icons/icons/md";

dayjs.extend(localizedFormatDayJs);
dayjs.locale(localeDayJs);

addIcons(MdKeyboardarrowdownRound, MdKeyboardarrowupRound);

const localRecords = useLocalRecordsStore();

const title = useTitle();
const initialTitle = title.value ? title.value.toString() : "";
const showTable = useStorage("show-local-table", false);

const table = reactive<SimpleTableProps>({
  columns: [],
  actions: [],
  perPage: 4,
});

onMounted(async () => {
  table.columns = tableColumns();
  table.actions = tableActions();

  if (localRecordsLines.value.length === 0) showTable.value = false;
});

const localRecordsLines = computed(() => {
  return makeTableLinesByLocalRecords(localRecords.getRecords);
});

const doneAction = (payload: SimpleTimerDonePayload) => {
  const { date } = payload;
  const day = dayjs(date).format("DD/MM/YYYY");

  const whenFinished = `${zeroLeft(dayjs(date).hour())}:${zeroLeft(
    dayjs(date).minute()
  )}`;

  title.value = initialTitle;
  localRecords.addRecord(day, whenFinished, payload.seconds);

  // Open on first add record.
  if (localRecordsLines.value.length == 1) showTable.value = true;
};

const resetAction = () => {
  title.value = initialTitle;
};

const handleCounter = (counter: string) => {
  title.value = `${counter} - ${initialTitle}`;
};

const handleAction = (payload: TheTableActionPayload) => {
  const { action, line } = payload;
  if (action == "delete") localRecords.deleteRecord(line.id as string);
};

const toggleTable = () => {
  showTable.value = !showTable.value;
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

    <TheButton design="transparent" @click="toggleTable">
      <OhVueIcon
        :name="
          showTable ? 'md-keyboardarrowup-round' : 'md-keyboardarrowdown-round'
        "
        :title="showTable ? $t('timer.table.hide') : $t('timer.table.show')"
        scale="1.5"
        fill="var(--text-color)"
      />
    </TheButton>

    <Transition>
      <div class="card-bg full-area" v-if="showTable">
        <SimpleTable
          v-bind="table"
          :lines="localRecordsLines"
          data-testid="timer--local-table"
          @table:action="handleAction"
        />
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
@import "./TimerAndLocalRecords.scss";
</style>
