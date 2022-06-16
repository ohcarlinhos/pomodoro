<script setup lang="ts">
import TimerAndLocalRecords from "@/components/timer/timer-and-local-records";
import logoImage from "@/assets/img/logo.svg";
</script>

<template>
  <div class="page__container">
    <div class="page__title">
      <img :src="logoImage" alt="" class="logo__image" />
      <h2 class="title_h">Hora de Focar!</h2>
    </div>
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
