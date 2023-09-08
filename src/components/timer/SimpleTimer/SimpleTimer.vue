<script setup lang="ts">
import { ref, watch, onMounted, computed } from "vue";
import { zeroLeft } from "@/util/functions";
import { useStorage } from "@vueuse/core";

import TheButton from "@/components/ui/TheButton";
import { OhVueIcon, addIcons } from "oh-vue-icons";

import { MdPause, MdPlayarrow, MdStop, MdCheck } from "oh-vue-icons/icons/md";

import type { SimpleTimerDonePayload } from "./types";

export interface SimpleTimerProps {
  increment?: boolean;
  minutes?: number;
  seconds?: number;
}

const emit = defineEmits([
  "timer:done",
  "timer:click",
  "timer:reset",
  "timer:counter",
]);

addIcons(MdPause, MdPlayarrow, MdStop, MdCheck);

const props = withDefaults(defineProps<SimpleTimerProps>(), {
  increment: false,
  minutes: 0,
  seconds: 0,
});

const interval = ref<unknown>(null);

const timer = useStorage("timer-status", {
  active: false,
  secondsPast: 0,
  lastDateNow: 0,
});

/** Lifecycle */

onMounted(() => {
  reCalcTimerSeconds();
  timer.value.active = false;
});

watch(
  () => props.minutes,
  () => {
    reCalcTimerSeconds();
  }
);

/** Computeds */

const startButton = computed(() =>
  timer.value.active ? "timer.actions.pause" : "timer.actions.start"
);

const startButtonDesign = computed(() =>
  !timer.value.active ? "primary" : "warning"
);

const startButtonIcon = computed(() =>
  !timer.value.active ? "md-playarrow" : "md-pause"
);

const minutes = computed(() => {
  const secondsTimer = timer.value.seconds - timer.value.secondsPast;
  return zeroLeft(Math.floor(secondsTimer / 60));
});

const seconds = computed(() => {
  const secondsTimer = timer.value.seconds - timer.value.secondsPast;
  const totalMinutes = Math.floor(secondsTimer / 60) * 60;
  return zeroLeft((totalMinutes - secondsTimer) * -1);
});

/** Methods */

const incrementOrDecrementTimer = () => {
  const isDecrement = !props.increment;

  if (isDecrement) {
    if (timer.value.secondsPast >= timer.value.seconds) doneTimerWork();
    else {
      let timePast = 0;

      if (timer.value.lastDateNow) {
        timePast = Date.now() - timer.value.lastDateNow;
        timer.value.secondsPast =
          Math.round(timePast / 1000) + timer.value.secondsPast;
      } else timer.value.secondsPast++;

      timer.value.lastDateNow = Date.now();
      emit("timer:counter", timerCounter.value);
    }
  }
};

const start = () => {
  timer.value.lastDateNow = 0;

  if (!timer.value.active) initTimerInterval();
  else clearTimerInterval();

  const payload = { active: timer.value.active };

  emit("timer:counter", timerCounter.value);
  emit("timer:click", payload);
};

const reset = () => {
  emit("timer:reset");
  clearTimerInterval();
  resetTimer();
};

const doneTimerWork = (manual = false) => {
  if (timer.value.secondsPast == 0) return;

  const payload: SimpleTimerDonePayload = {
    date: new Date(),
    seconds: timer.value.secondsPast,
    manual,
  };

  emit("timer:done", payload);
  clearTimerInterval();
  resetTimer();
};

const clearTimerInterval = () => {
  clearInterval(interval.value as number);
  timer.value.active = false;
};

const initTimerInterval = () => {
  interval.value = setInterval(incrementOrDecrementTimer, 1000);
  timer.value.active = true;
};

const resetTimer = () => {
  reCalcTimerSeconds();
  timer.value.active = false;
  timer.value.secondsPast = 0;
  timer.value.lastDateNow = 0;
};

const reCalcTimerSeconds = () => {
  timer.value.seconds = props.minutes * 60 + props.seconds;
};

const timerCounter = computed(() => {
  return `${minutes.value}:${seconds.value}`;
});
</script>

<template>
  <div class="timer__container" data-testid="simple-timer">
    <span class="timer" data-testid="timer-counter"> {{ timerCounter }} </span>

    <div class="buttons">
      <TheButton
        :design="startButtonDesign"
        :label="$t(startButton)"
        :title="$t(startButton)"
        data-testid="timer-start"
        size="sm"
        @click="start"
      >
        <OhVueIcon :name="startButtonIcon" />
      </TheButton>

      <TheButton
        :disabled="!timer.secondsPast"
        :label="$t('timer.actions.done')"
        :title="$t('timer.actions.done')"
        data-testid="timer-done"
        design="confirm"
        size="sm"
        @click="doneTimerWork(true)"
      >
        <OhVueIcon name="md-check" />
      </TheButton>

      <TheButton
        :disabled="!timer.secondsPast"
        :label="$t('timer.actions.stop')"
        :title="$t('timer.actions.stop')"
        data-testid="timer-stop"
        design="remove"
        size="sm"
        @click="reset"
      >
        <OhVueIcon name="md-stop" />
      </TheButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./SimpleTimer.scss";
</style>
