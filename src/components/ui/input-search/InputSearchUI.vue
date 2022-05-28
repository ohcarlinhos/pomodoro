<script setup lang="ts">
import { ref, computed } from "vue";
import InputUI from "../input/InputUI.vue";
import { SearchIcon } from "../../icons";

export interface InputSearchUIProps {
  placeholder?: string;
  size?: string;
  rounded?: boolean;
}

const props = withDefaults(defineProps<InputSearchUIProps>(), {
  placeholder: "Pesquisa",
  size: "",
  rounded: false,
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
  <div class="search__container">
    <InputUI
      v-model="inputSearch"
      class="search__input"
      type="search"
      v-bind="props"
      @keydown.enter="search"
    />

    <button
      class="search__button"
      :disabled="!canSubmit"
      :class="{ disabled: !canSubmit }"
      @click="search"
    >
      <SearchIcon class="icon" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "./InputSearchUI.scss";
</style>
