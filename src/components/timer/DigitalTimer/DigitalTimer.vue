<script setup lang="ts">
import { reactive, onMounted } from "vue";
import { maska } from "maska";

import { util } from ".";
import type { DigitalTimerInterface } from ".";

import { alarmSound, clickSound } from "./sounds";

import SimpleTimer, {
  type SimpleTimerClickPayload,
  type SimpleTimerDonePayload,
} from "@/components/timer/SimpleTimer";

export interface DigitalTimerProps {
  doneAction?: (payload: SimpleTimerDonePayload) => void;
  handleCounter?: (payload: string) => void;
  resetAction?: () => void;
}

const alarm = new Audio(alarmSound);
const click = new Audio(clickSound);

const props = withDefaults(defineProps<DigitalTimerProps>(), {
  doneAction: () => {
    return;
  },
  resetAction: () => {
    return;
  },
  handleCounter: () => {
    return;
  },
});

const vMaska = maska;

const timer = reactive<DigitalTimerInterface>({
  minutes: 25,
  active: false,
  type: "normal",
  buttons: [],
  custom: "",
});

onMounted(() => {
  timer.buttons = util.defaultTimerButtons();
});

const doneTimer = (payload: SimpleTimerDonePayload) => {
  if (payload.manual) click.play();
  else alarm.play();
  timer.active = false;
  props.doneAction(payload);
};

const clickTimer = (payload: SimpleTimerClickPayload) => {
  click.play();
  timer.active = payload.active;
};

const resetTimer = () => {
  click.play();
  timer.active = false;
  props.resetAction();
};

const setTime = (minutes: number, type = "normal") => {
  timer.minutes = minutes;
  timer.type = type;
};

const setCustomTime = () => {
  if (timer.active) return;
  setTime(parseInt(timer.custom) || 1);
};
</script>

<template>
  <div class="container">
    <div class="buttons">
      <button
        v-for="b in timer.buttons"
        :key="b.label"
        :disabled="timer.active"
        @click="setTime(b.value)"
      >
        {{ b.label }}
      </button>
      <input
        v-model="timer.custom"
        v-maska="'###'"
        type="text"
        placeholder="Other"
        :disabled="timer.active"
        @input="setCustomTime"
        @click="setCustomTime"
      />
    </div>
    <SimpleTimer
      :minutes="timer.minutes"
      @timer:done="doneTimer"
      @timer:click="clickTimer"
      @timer:reset="resetTimer"
      @timer:counter="handleCounter"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "./DigitalTimer.scss";
</style>
