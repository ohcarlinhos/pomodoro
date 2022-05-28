<script setup lang="ts">
import { reactive, onMounted } from "vue";

import type {
  TimerUIClickPayload,
  TimerUIDonePayload,
} from "../../ui/timer/TimerUI.types";
import TimerUI from "../../ui/timer/TimerUI.vue";

import type { DigitalTimerInterface } from "./DigitalTimer.types";
import { defaultTimerButtons } from "./DigitalTimer.util";

import alarmSound from "./sounds/alarm.mp3";
import clickSound from "./sounds/click.mp3";

const alarm = new Audio(alarmSound);
const click = new Audio(clickSound);

const timer = reactive<DigitalTimerInterface>({
  minutes: 25,
  active: false,
  type: "normal",
  buttons: [],
});

onMounted(() => {
  timer.buttons = defaultTimerButtons();
});

const doneTimer = (payload: TimerUIDonePayload) => {
  if (payload.manual) click.play();
  else alarm.play();
  timer.active = false;
};

const clickTimer = (payload: TimerUIClickPayload) => {
  click.play();
  timer.active = payload.active;
};

const setTime = (minutes: number, type = "normal") => {
  timer.minutes = minutes;
  timer.type = type;
};
</script>

<template>
  <div class="timer__container">
    <div class="timer__buttons">
      <button
        v-for="b in timer.buttons"
        :key="b.label"
        @click="setTime(b.value)"
        :disabled="timer.active"
      >
        {{ b.label }}
      </button>
    </div>
    <TimerUI
      :minutes="timer.minutes"
      @timer:done="doneTimer"
      @timer:click="clickTimer"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "./DigitalTimer.scss";
</style>
