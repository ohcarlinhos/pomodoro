<script setup lang="ts">
const props = defineProps({
  id: String,
  label: String,
  type: {
    type: String,
    default: "text",
  },
});
</script>

<template>
  <div class="input-text">
    <label v-if="props.id" :for="props.id" class="label">{{ label }}</label>
    <input class="input" :id="props.id" :type="type" />
  </div>
</template>

<style lang="sass" scoped>
@import "./InputUI.sass"
</style>
