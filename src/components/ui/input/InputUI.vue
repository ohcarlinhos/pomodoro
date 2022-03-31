<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  modelValue: [String, Number],
  id: String,
  label: String,
  type: {
    type: String,
    default: "text",
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
  <div class="input-ui">
    <label v-if="props.label" :for="props.id" class="label">{{
      props.label
    }}</label>
    <input class="input" :id="props.id" :type="type" v-model="inputValue" />
  </div>
</template>

<style lang="sass" scoped>
@import "./InputUI.sass"
</style>
