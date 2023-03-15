<script setup lang="ts">
import TimerAndLocalRecords from "@/components/timer/timer-and-local-records";
import TheFooter from "@/components/ui/TheFooter";
</script>

<template>
  <div class="page__container">
    <div class="timer__area">
      <TimerAndLocalRecords />
    </div>
    <div class="page__footer">
      <!-- <span>
        Developed by
        <a href="https://github.com/caarlos1" target="_blank">@caarlos1</a>
      </span> -->
      <TheFooter
        link-auth="https://github.com/caarlos1"
        copy="Developed by"
        auth="@caarlos1"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./TimerPage.scss";
</style>
