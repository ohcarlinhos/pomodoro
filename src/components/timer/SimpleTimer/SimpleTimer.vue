<script setup lang="ts">
import { ref, watch, onMounted, computed } from "vue";
import { zeroLeft } from "@/util/functions";
import { useStorage } from "@vueuse/core";

import TheButton from "@/components/ui/TheButton";
import { OhVueIcon, addIcons } from "oh-vue-icons";

import { MdPause, MdPlayarrow, MdStop, MdCheck } from "oh-vue-icons/icons/md";

import type { SimpleTimerDonePayload } from ".";

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
  seconds: 0,
  secondsPast: 0,
});

/** Lifecycle */

onMounted(() => {
  reCalcTimer();
  timer.value.active = false;
});

watch(
  () => props.minutes,
  () => {
    reCalcTimer();
  }
);

/** Computeds */

const startButton = computed(() => (timer.value.active ? "Pausar" : "Iniciar"));
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

const moveTimer = () => {
  if (!props.increment && timer.value.secondsPast >= timer.value.seconds)
    done();
  else {
    timer.value.secondsPast++;
    emit("timer:counter", timerCounter.value);
  }
};

const start = () => {
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

const done = (manual = false) => {
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
  interval.value = setInterval(moveTimer, 1000);
  timer.value.active = true;
};

const resetTimer = () => {
  reCalcTimer();
  timer.value.active = false;
  timer.value.secondsPast = 0;
};

const reCalcTimer = () => {
  timer.value.seconds = props.minutes * 60 + props.seconds;
};

const timerCounter = computed(() => {
  return `${minutes.value}:${seconds.value}`;
});
</script>

<template>
  <div class="timer__container" data-testid="simple-timer">
    <span class="timer"> {{ timerCounter }} </span>

    <div class="buttons">
      <TheButton
        :design="startButtonDesign"
        :label="startButton"
        data-testid="timer-start"
        size="sm"
        @click="start"
      >
        <OhVueIcon :name="startButtonIcon" />
      </TheButton>
      <TheButton
        :disabled="!timer.secondsPast"
        label="Concluir"
        data-testid="timer-done"
        design="confirm"
        size="sm"
        @click="done(true)"
      >
        <OhVueIcon name="md-check" />
      </TheButton>
      <TheButton
        :disabled="!timer.secondsPast"
        label="Limpar"
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
