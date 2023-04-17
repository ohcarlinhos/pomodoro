<script setup lang="ts">
import { ref, computed } from "vue";
import InputField from "@/components/ui/InputField";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiSearch } from "oh-vue-icons/icons";

export interface InputSearchProps {
  placeholder?: string;
  size?: string;
  rounded?: boolean;
}

const props = withDefaults(defineProps<InputSearchProps>(), {
  placeholder: "",
  size: "",
  rounded: false,
});

const emit = defineEmits(["input-search:submit"]);

const SearchIcon = HiSearch;
addIcons(SearchIcon);

const inputSearch = ref("");
const canSubmit = computed(() => !!inputSearch.value);

const search = () => {
  emit("input-search:submit", inputSearch.value);
  inputSearch.value = "";
};
</script>

<template>
  <div class="search__container">
    <InputField
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
      <OhVueIcon
        :name="SearchIcon.name"
        class="icon"
        fill="var(--text-color)"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "./InputSearch.scss";
</style>
