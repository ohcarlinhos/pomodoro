<script setup lang="ts">
defineProps({
  title: String,
});
</script>

<template>
  <div class="card-ui">
    <div v-if="title" class="header-block">
      <h3 class="title">{{ title }}</h3>
    </div>
    <div class="body-slot">
      <slot name="body"></slot>
    </div>
    <div class="footer-slot">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "./CardUI.sass"
</style>
