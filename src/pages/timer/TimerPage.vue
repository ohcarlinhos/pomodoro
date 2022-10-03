<script setup lang="ts">
import TimerAndLocalRecords from "@/components/timer/timer-and-local-records";
</script>

<template>
  <div class="page__container">
    <div class="timer__area">
      <TimerAndLocalRecords />
    </div>
    <div class="page__footer">
      <span>
        Developed by
        <a href="https://github.com/caarlos1" target="_blank">@caarlos1</a>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./TimerPage.scss";
</style>
