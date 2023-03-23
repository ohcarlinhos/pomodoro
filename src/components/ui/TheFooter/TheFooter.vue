<script setup lang="ts">
import { handleI18n } from "@/i18n/util";
import { computed } from "vue";

const props = defineProps({
  copy: { type: String, default: "" },
  auth: { type: String, default: "" },
  linkAuth: { type: String, default: "" },
});

const text = computed(() => ({
  copy: handleI18n(props.copy),
}));
</script>

<template>
  <footer v-if="text.copy || auth">
    <template v-if="linkAuth">
      {{ text.copy }}
      <a :href="linkAuth" target="_blank">{{ auth }}</a>
    </template>
    <template v-else> {{ text.copy }} {{ auth ? auth : "" }}</template>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: inline;
}
</style>
