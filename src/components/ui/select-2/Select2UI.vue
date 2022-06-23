<script setup lang="ts">
import VueMultiselect from "vue-multiselect";
import { ref } from "vue";

export interface Select2UIProps {
  placeholder: string;
  options: string[];
}

const props = withDefaults(defineProps<Select2UIProps>(), {
  options: () => [],
});
const data = ref(null);
</script>

<template>
  <VueMultiselect
    v-model="data"
    v-bind="props"
    :options="['Teste', 'Teste 2']"
  />
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>
