<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<template>
  <div class="card-component">
    <div v-if="props.title" class="header-block">
      <h3 class="title">{{ props.title }}</h3>
    </div>
    <div class="body-slot">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "./CardUI.sass"
</style>
