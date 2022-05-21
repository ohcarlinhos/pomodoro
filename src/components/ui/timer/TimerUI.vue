<script setup lang="ts">
import { reactive, ref, onMounted, computed } from "vue";
import ButtonUI from "../button/ButtonUI.vue";

export interface TimerUIProps {
  increment?: boolean;
  minutes?: number;
  seconds?: number;
}

const emit = defineEmits(["timer:done"]);

const props = withDefaults(defineProps<TimerUIProps>(), {
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

/** Computeds */

const timerButton = computed(() => (timer.active ? "Pausar" : "Começar"));

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
  if (!props.increment && timer.seconds == timer.secondsPast) done();
  else {
    timer.secondsPast++;
  }
};

const start = () => {
  if (!timer.active) initTimerInterval();
  else clearTimerInterval();
};

interface TimerUIPayload {
  date: Date;
  seconds: number;
}

const done = () => {
  if (timer.secondsPast == 0) return;
  const payload: TimerUIPayload = {
    date: new Date(),
    seconds: timer.secondsPast,
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
  timer.seconds = props.minutes * 60 + props.seconds;
  timer.secondsPast = 0;
};

/** Filters */

const zeroLeft = (value: number, size = 2): string => {
  let s = String(value);
  while (s.length < size) {
    s = "0" + s;
  }
  return s;
};
</script>

<template>
  <div class="timer__container">
    <span class="timer"> {{ minutes }}:{{ seconds }} </span>

    <div class="buttons">
      <ButtonUI @click="start" size="sm" :label="timerButton" full />
      <ButtonUI
        @click="done"
        size="sm"
        label="Finaliziar"
        :disabled="!timer.secondsPast"
        full
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./TimerUI.scss";
</style>
