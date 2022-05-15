<script setup lang="ts">
import { maska } from "maska";
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
  mask: {
    type: [Array, String],
    default: () => [],
  },
  required: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "",
  },
  rounded: {
    type: Boolean,
    default: false,
  },
});

const vMaska = maska;

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
  <div class="input__container">
    <label v-if="props.label" :for="props.id">
      {{ props.label }}
    </label>
    <input
      v-if="mask.length"
      v-bind="props"
      v-maska="mask"
      v-model="inputValue"
      :required="required"
      :class="{ [size]: size, rounded }"
    />

    <input
      v-else
      v-bind="props"
      v-model="inputValue"
      :required="required"
      :class="{ [size]: size, rounded }"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "./InputUI.scss";
</style>
