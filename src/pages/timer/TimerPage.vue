<script setup lang="ts">
import TimerAndLocalRecords from "@/components/timer/TimerAndLocalRecords";
import LanguageSelector from "@/components/ui/LanguageSelector";
import TheFooter from "@/components/ui/TheFooter";
import { appConfig } from "@/config";
</script>

<template>
  <div class="page__container">
    <div class="timer__area">
      <LanguageSelector />
      <TimerAndLocalRecords />
    </div>
    <div class="page__footer">
      <TheFooter v-bind="appConfig.footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./TimerPage.scss";
</style>
