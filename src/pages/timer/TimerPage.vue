<script setup lang="ts">
import DigitalTimer from "../../components/timer/digital-timer/DigitalTimer.vue";
</script>

<template>
  <div class="page__container">
    <h2 class="page__title">Digital Timer</h2>

    <div class="timer__area white-bg">
      <DigitalTimer />
    </div>

    <div class="page__footer">
      Criado por <a href="https://github.com/caarlos1" target="_blank">@caarlos1</a>
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
</style>
