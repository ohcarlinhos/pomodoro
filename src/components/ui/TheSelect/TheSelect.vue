<script setup lang="ts">
import { computed } from "vue";
import type { TheSelectOption } from "./TheSelect.types";

export interface TheSelectProps {
  modelValue: string | number | null;
  id: string;
  label: string;
  type?: string;
  options: TheSelectOption[];
  optionText?: string;
}

const props = withDefaults(defineProps<TheSelectProps>(), {
  modelValue: "",
  type: "text",
  options: () => [],
  optionText: "Selecionar uma opção",
});

const emit = defineEmits(["update:modelValue"]);

const selectValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div class="select-ui">
    <label v-if="props.label" :for="props.id" class="label">{{
      props.label
    }}</label>
    <select class="select" :name="props.id" v-model="selectValue">
      <option disabled value="">{{ optionText }}</option>
      <option
        v-for="option in props.options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
@import "./TheSelect.scss";
</style>
