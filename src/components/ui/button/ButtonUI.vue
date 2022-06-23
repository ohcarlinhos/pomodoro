<script setup lang="ts">
import { computed } from "vue";

export type ButtonUIProps = {
  label: string;
  design?: string;
  full?: boolean;
  sharp?: boolean;
  disabled?: boolean;
  size?: string;
};

const props = withDefaults(defineProps<ButtonUIProps>(), {
  design: "",
  full: false,
  disabled: false,
  sharp: false,
  size: "sm",
});

const computedClass = computed(() => {
  const { disabled, full, design, sharp, size } = props;
  return { design, disabled, full, sharp, [design]: true, [size || ""]: true };
});
</script>

<template>
  <button
    class="button-ui"
    :class="computedClass"
    data-test="button-ui"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</template>

<style lang="scss" scoped>
@import "./ButtonUI.scss";
</style>
