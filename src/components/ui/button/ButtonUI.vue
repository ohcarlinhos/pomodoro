<script setup lang="ts">
import * as Styled from "./ButtonUI.styles";
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
  const { disabled, full, design } = props;
  return { design, disabled, full };
});
</script>

<template>
  <Styled.Button
    v-bind="props"
    :class="{ ...computedClass, [props.design]: true }"
    data-test="button-ui"
  >
    {{ label }}
  </Styled.Button>
</template>
