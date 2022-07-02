<script setup lang="ts">
import { computed } from "vue";
import VueMultiselect from "vue-multiselect";

export interface Select2UIProps {
  options: string[] | unknown[];
  modelValue: unknown;
  name?: string;
  label?: string;
  labelName?: string;
  trackBy?: string;
  placeholder?: string;
  tagPlaceholder?: string;
  selectLabel?: string;
  selectGroupLabel?: string;
  deselectLabel?: string;
  deselectGroupLabel?: string;
  limit?: number;
  limitText?: (count: number) => string;
  loading?: string;
  disabled?: string;

  showLabels?: boolean;
  multiple?: boolean;
  taggable?: boolean;

  noOptions?: string;
  noResult?: string;

  tagAction?: DefaultEventSelect;
  selectAction?: DefaultEventSelect;
  searchAction?: DefaultEventSelect;
}

export type DefaultEventSelect = (
  searchQuery: unknown,
  id?: string | number
) => void;

const props = withDefaults(defineProps<Select2UIProps>(), {
  options: () => [],
  placeholder: "Selecionar",
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
  <div class="select-2ui">
    <div class="label__select">
      <label v-if="props.labelName">
        {{ props.labelName }}
      </label>
    </div>

    <VueMultiselect
      v-bind="props"
      v-model="inputValue"
      @tag="tagAction"
      @select="selectAction"
      @search-change="searchAction"
    >
      <template #noResult> {{ noResult }} </template>
      <template #noOptions> {{ noOptions }} </template>
    </VueMultiselect>
  </div>
</template>

<style lang="scss" scoped>
.select-2ui {
  width: 100%;

  .label__select {
    width: 100%;
    font-size: 1.4rem;
    padding-bottom: 5px;
    font-weight: 500;
  }
}
.select-2ui :deep(.multiselect) {
  .multiselect__single,
  .multiselect__element,
  .multiselect__input {
    font-size: 1.4rem;
    padding-left: 0;
  }
}
</style>
