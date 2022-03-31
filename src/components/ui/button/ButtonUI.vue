<script setup lang="ts">
const props = defineProps({
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
  <button :class="props.design" :disabled="props.disabled" class="button-ui">
    {{ props.label }}
  </button>
</template>

<style lang="sass" scoped>
@import "./ButtonUI.sass"
</style>
