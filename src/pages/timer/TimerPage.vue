<script setup lang="ts">
import DigitalTimer from "../../components/timer/digital-timer/DigitalTimer.vue";
</script>

<template>
  <div class="page__container">
    <h2 class="page__title">🍅 Pomodoro Timer</h2>

    <div class="timer__area white-bg">
      <DigitalTimer />
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
.page__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.page__title {
  font-size: 3.5rem;
  font-weight: 900;
  margin: 20px;
}

.white-bg {
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
  border: 1px solid #eaeaea;
}

.timer__area {
  width: 100%;
  max-width: 500px;
}
.page__footer {
  text-align: center;
  line-height: 2.5rem;
  .warning {
    font-size: 2rem;
  }
}
</style>
