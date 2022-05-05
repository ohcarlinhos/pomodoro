<script setup lang="ts">
import * as Styled from "./InputUI.styles";
import { computed } from "vue";

const props = defineProps({
  modelValue: [String, Number],
  id: String,
  label: String,
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);
const inputValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <Styled.InputContainer>
    <Styled.Label v-if="props.label" :for="props.id">
      {{ props.label }}
    </Styled.Label>
    <Styled.Input v-bind="props" v-model="inputValue" />
  </Styled.InputContainer>
</template>
