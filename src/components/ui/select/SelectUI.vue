<script setup lang="ts">
import { computed } from "vue";
import type { SelectUIOption } from "./SelectUI.types";

type SelectUIProps = {
  modelValue: string | number | null;
  id: string;
  label: string;
  type?: string;
  options: SelectUIOption[];
  optionText?: string;
};

const props = withDefaults(defineProps<SelectUIProps>(), {
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

<style lang="sass" scoped>
@import "./SelectUI.sass"
</style>
