<script setup lang="ts">
import { maska } from "maska";
import { computed } from "vue";

export interface InputFieldProps {
  modelValue?: string | number;
  id?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  mask?: string[] | string;
  required?: boolean;
  size?: string;
  rounded?: boolean;
}

const props = withDefaults(defineProps<InputFieldProps>(), {
  type: "text",
  placeholder: "",
  mask: () => [],
  required: false,
  size: "",
  rounded: false,
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
      v-model="inputValue"
      v-maska="mask"
      :id="id"
      :placeholder="placeholder"
      :name="type"
      :type="type"
      :required="required"
      :class="{ [size]: size, rounded }"
    />

    <input
      v-else
      v-model="inputValue"
      :id="id"
      :placeholder="placeholder"
      :name="type"
      :type="type"
      :required="required"
      :class="{ [size]: size, rounded }"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "./InputField.scss";
</style>
