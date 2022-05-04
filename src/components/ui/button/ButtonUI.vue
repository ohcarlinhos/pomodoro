<script setup lang="ts">
defineProps({
  label: String,
  design: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button :class="design" :disabled="disabled" class="button-ui">
    {{ label }}
  </button>
</template>

<style lang="sass" scoped>
@import "./ButtonUI.sass"
</style>
