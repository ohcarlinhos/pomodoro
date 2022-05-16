<script setup lang="ts">
import { computed } from "vue";

export interface PaginationUIProps {
  size: number;
  perPage: number;
}

const props = withDefaults(defineProps<PaginationUIProps>(), {
  size: 0,
  perPage: 10,
});

interface Page {
  label: string | number;
  selected: boolean;
  disabled?: boolean;
  lastPage?: boolean;
}

const pages = computed(() => {
  if (!props.size) return [];

  const pages: Page[] = [];

  let modulePage = props.size % props.perPage;
  let lastPageCalc = props.size / props.perPage;
  if (modulePage != 0) lastPageCalc = lastPageCalc - modulePage * 0.1 + 1;

  for (let i = 1; i <= lastPageCalc; i++) {
    pages.push({
      label: i,
      selected: false,
      lastPage: false,
    });
  }

  pages[pages.length - 1].lastPage = true;
  pages[0].selected = true;

  return pages;
});
</script>

<template>
  <ul class="pagination__container">
    <li
      v-for="page in pages"
      :key="page.label"
      :class="{ last__page: page.lastPage, selected: page.selected }"
    >
      <span class="dots" v-if="page.lastPage">...</span>
      <span class="label">{{ page.label }}</span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "./PaginationUI.scss";
</style>
