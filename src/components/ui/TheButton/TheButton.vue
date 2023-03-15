<script setup lang="ts">
import { computed } from "vue";

export type TheButtonProps = {
  label?: string;
  design?: string;
  full?: boolean;
  sharp?: boolean;
  disabled?: boolean;
  size?: string;
};

const props = withDefaults(defineProps<TheButtonProps>(), {
  label: "",
  design: "",
  full: false,
  disabled: false,
  sharp: false,
  size: "sm",
});

const computedClasses = computed(() => {
  const { full, size, sharp, disabled, design } = props;
  return {
    full,
    [size]: size.length,
    sharp,
    disabled,
    [design]: design.length,
  };
});
</script>

<template>
  <button
    class="button-ui"
    data-testid="the-button"
    :class="computedClasses"
    :disabled="disabled"
  >
    <template v-if="$slots['default']">
      <slot></slot>
    </template>
    <template v-else>
      {{ label }}
    </template>
  </button>
</template>

<style lang="scss" scoped>
@import "./TheButton.scss";
</style>
