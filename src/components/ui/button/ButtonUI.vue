<script setup lang="ts">
import { computed } from "vue";

export type ButtonUIProps = {
  label: string;
  design?: string;
  full?: boolean;
  disabled?: boolean;
};

const props = withDefaults(defineProps<ButtonUIProps>(), {
  design: "",
  full: false,
  disabled: false,
});

const computedClass = computed(() => {
  return {
    disabled: props.disabled,
    full: props.full,
  };
});
</script>

<template>
  <button
    :disabled="disabled"
    class="button-ui"
    :class="{ ...computedClass, [props.design]: true }"
    data-test="button-ui"
  >
    {{ label }}
  </button>
</template>

<style lang="sass" scoped>
@import "./ButtonUI.sass"
</style>
