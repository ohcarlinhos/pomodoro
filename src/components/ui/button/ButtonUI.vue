<script setup lang="ts">
import { computed, useSlots } from "vue";

export type ButtonUIProps = {
  label?: string;
  design?: string;
  full?: boolean;
  sharp?: boolean;
  disabled?: boolean;
  size?: string;
};

const props = withDefaults(defineProps<ButtonUIProps>(), {
  label: "",
  design: "",
  full: false,
  disabled: false,
  sharp: false,
  size: "sm",
});

const slots = useSlots();

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
  <button class="button-ui" :class="computedClasses" :disabled="disabled">
    <template v-if="slots['default']">
      <slot></slot>
    </template>
    <template v-else>
      {{ label }}
    </template>
  </button>
</template>

<style lang="scss" scoped>
@import "./ButtonUI.scss";
</style>
