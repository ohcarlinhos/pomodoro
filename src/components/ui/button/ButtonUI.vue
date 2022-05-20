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
    :class="{ ...computedClass, design: true, size: true }"
    data-test="button-ui"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.button-ui {
  background: #8700f2;
  padding: 15px 20px;
  border: none;
  color: #fff;
  transition: all 0.1s ease-in-out;
  font-size: 1.6rem;
  line-height: 1.6rem;
  border-radius: 5px;
}

.sharp {
  border-radius: 0;
}

.lg {
  padding: 15px 20px;
  font-size: 1.7rem;
}

.button-ui:hover {
  background: #7100cd;
  cursor: pointer;
  filter: drop-shadow(4px 4px 0px #1e1a6134);
}

.button-ui:active {
  transform: translateY(2px);
}

.button-ui.full {
  width: 100%;
}

.button-ui:disabled {
  opacity: 0.5;
  filter: none;
}

.button-ui:disabled:active {
  transform: none;
}

.button-ui:disabled:hover {
  cursor: default;
}
</style>
