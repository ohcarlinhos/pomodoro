<script setup lang="ts">
import TimerAndLocalRecords from "@/components/timer/timer-and-local-records/TimerAndLocalRecords.vue";
</script>

<template>
  <div class="page__container">
    <h2 class="page__title">🍅 Pomodoro</h2>
    <div class="timer__area">
      <TimerAndLocalRecords />
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
