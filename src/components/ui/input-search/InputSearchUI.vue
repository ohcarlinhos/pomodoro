<script setup lang="ts">
import { ref, computed } from "vue";
import InputUI from "../input/InputUI.vue";
import { SearchIcon } from "../../icons";

defineProps({
  placeholder: {
    type: String,
    default: "Pesquisa",
  },
});

const emit = defineEmits(["input-search:submit"]);

const inputSearch = ref("");
const canSubmit = computed(() => !!inputSearch.value);

const search = () => {
  emit("input-search:submit", inputSearch.value);
  inputSearch.value = "";
};
</script>

<template>
  <div class="input-search__container">
    <InputUI
      v-model="inputSearch"
      class="input-search__input"
      type="search"
      :placeholder="placeholder"
      @keydown.enter="search"
    />

    <button
      class="input-search__button"
      :disabled="!canSubmit"
      :class="{ disabled: !canSubmit }"
      @click="search"
    >
      <SearchIcon class="icon-search" />
    </button>
  </div>
</template>

<style scoped>
.input-search__container {
  width: 100%;
  position: relative;
}
.input-search__button {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
  padding: 0;
  margin: 0;
  text-align: center;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.icon-search {
  height: 20px;
}

.input-search__button .icon-search {
  fill: var(--color-text);
  transition: all 150ms ease;
}

.input-search__button .icon-search:hover {
  transform: scale(120%);
}

.input-search__button .icon-search:active {
  transform: scale(110%);
}

.disabled {
  cursor: initial;
}
.disabled .icon-search {
  opacity: 0.5;
  transform: scale(100%) !important;
}
</style>
