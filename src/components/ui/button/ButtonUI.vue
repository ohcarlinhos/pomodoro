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
});

const computedClass = computed(() => {
  const { disabled, full, design, sharp } = props;
  return { design, disabled, full, sharp };
});
</script>

<template>
  <button
    v-bind="props"
    class="button-ui"
    :class="{ ...computedClass, design: true, [size!]: true }"
    data-test="button-ui"
  >
    {{ label }}
  </button>
</template>

<style lang="scss" scoped>
@import "./ButtonUI.scss";
</style>
