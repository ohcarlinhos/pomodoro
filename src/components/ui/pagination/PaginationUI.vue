<script setup lang="ts">
import { computed } from "vue";

export interface PaginationUIProps {
  size: number;
  perPage: number;
  firstPage: number;
  selected: number;
}

const props = withDefaults(defineProps<PaginationUIProps>(), {
  size: 0,
  perPage: 10,
  firstPage: 1,
  selected: 1,
});

const emit = defineEmits(["pagination:select-page"]);

interface Page {
  label: string | number;
  selected: boolean;
  disabled?: boolean;
  lastPage?: boolean;
}

const pages = computed(() => {
  if (!props.size || props.perPage == 0) return [];

  let pageList: Page[] = [];

  let modulePage = props.size % props.perPage;
  let lastPageCalc = props.size / props.perPage;
  if (modulePage != 0) lastPageCalc = lastPageCalc + 1;
  if (props.size <= props.perPage) lastPageCalc = 1;

  const firstPage =
    props.firstPage <= lastPageCalc ? props.firstPage : lastPageCalc;

  const selected =
    props.selected <= lastPageCalc ? props.selected : lastPageCalc;

  let max = 6;
  for (let i = firstPage; i <= lastPageCalc; i++) {
    if (max || i == lastPageCalc) {
      pageList.push({
        label: i,
        selected: false,
        lastPage: false,
      });

      max--;
    }
  }

  pageList[pageList.length - 1].lastPage = true;
  pageList = pageList.map((p) => {
    if (p.label == selected) p.selected = true;
    return p;
  });

  return pageList;
});

const prev = () => {
  const page = props.selected - 1 > 0 ? props.selected - 1 : 1;
  emit("pagination:select-page", page);
};

const next = () => {
  const page =
    props.selected + 1 <= pages.value.length
      ? props.selected + 1
      : pages.value.length;
  emit("pagination:select-page", page);
};
</script>

<template>
  <ul class="pagination__container">
    <li v-if="pages.length >= 2" @click="prev">
      <span class="label">
        {{ "<" }}
      </span>
    </li>

    <li
      v-for="page in pages"
      :key="page.label"
      @click="() => emit('pagination:select-page', page.label)"
    >
      <span class="dots" v-if="page.lastPage && pages.length >= 2">...</span>
      <span
        class="label"
        :class="{ selected: page.selected, alone: pages.length == 1 }"
      >
        {{ page.label }}
      </span>
    </li>

    <li>
      <span class="label" v-if="pages.length >= 2" @click="next">
        {{ ">" }}
      </span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "./PaginationUI.scss";
</style>
