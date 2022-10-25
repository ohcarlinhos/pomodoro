<script setup lang="ts">
import { zeroLeft } from "@/util/functions";
import { reactive, ref, watch, onMounted, computed } from "vue";

import ButtonUI from "@/components/ui/button";
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

const timer = reactive({
  active: false,
  seconds: 0,
  secondsPast: 0,
});

/** Lifecycle */

onMounted(() => {
  resetTimer();
});

watch(
  () => props.minutes,
  () => {
    reCalcTimer();
  }
);

/** Computeds */

const startButton = computed(() => (timer.active ? "Pausar" : "Iniciar"));
const startButtonDesign = computed(() =>
  !timer.active ? "primary" : "warning"
);

const startButtonIcon = computed(() =>
  !timer.active ? "md-playarrow" : "md-pause"
);

const minutes = computed(() => {
  const secondsTimer = timer.seconds - timer.secondsPast;
  return zeroLeft(Math.floor(secondsTimer / 60));
});

const seconds = computed(() => {
  const secondsTimer = timer.seconds - timer.secondsPast;
  const totalMinutes = Math.floor(secondsTimer / 60) * 60;
  return zeroLeft((totalMinutes - secondsTimer) * -1);
});

/** Methods */

const moveTimer = () => {
  if (!props.increment && timer.secondsPast >= timer.seconds) done();
  else {
    timer.secondsPast++;
    emit("timer:counter", timerCounter.value);
  }
};

const start = () => {
  if (!timer.active) initTimerInterval();
  else clearTimerInterval();
  const payload = { active: timer.active };
  emit("timer:counter", timerCounter.value);
  emit("timer:click", payload);
};

const reset = () => {
  emit("timer:reset");
  clearTimerInterval();
  resetTimer();
};

const done = (manual = false) => {
  if (timer.secondsPast == 0) return;
  const payload: SimpleTimerDonePayload = {
    date: new Date(),
    seconds: timer.secondsPast,
    manual,
  };

  emit("timer:done", payload);
  clearTimerInterval();
  resetTimer();
};

const clearTimerInterval = () => {
  clearInterval(interval.value as number);
  timer.active = false;
};

const initTimerInterval = () => {
  interval.value = setInterval(moveTimer, 1000);
  timer.active = true;
};

const resetTimer = () => {
  reCalcTimer();
  timer.secondsPast = 0;
};

const reCalcTimer = () => {
  timer.seconds = props.minutes * 60 + props.seconds;
};

const timerCounter = computed(() => {
  return `${minutes.value}:${seconds.value}`;
});
</script>

<template>
  <div class="timer__container">
    <span class="timer"> {{ timerCounter }} </span>

    <div class="buttons">
      <ButtonUI
        @click="start"
        size="sm"
        :label="startButton"
        :design="startButtonDesign"
      >
        <OhVueIcon :name="startButtonIcon" />
      </ButtonUI>
      <ButtonUI
        @click="done(true)"
        size="sm"
        label="Concluir"
        design="confirm"
        :disabled="!timer.secondsPast"
      >
        <OhVueIcon name="md-check" />
      </ButtonUI>
      <ButtonUI
        @click="reset"
        size="sm"
        label="Limpar"
        design="remove"
        :disabled="!timer.secondsPast"
      >
        <OhVueIcon name="md-stop" />
      </ButtonUI>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./SimpleTimer.scss";
</style>
