<script setup lang="ts">
import { handleI18n } from "@/i18n/util";
import { computed } from "vue";

export interface TheFooterProps {
  copy: string;
  auth: string;
  url?: string;
  coffee?: {
    text: string;
    url: string;
  };
}

const props = withDefaults(defineProps<TheFooterProps>(), {
  copy: "",
  auth: "",
});

const text = computed(() => ({
  copy: handleI18n(props.copy),
  coffee:
    props.coffee && props.coffee.text ? handleI18n(props.coffee.text) : "",
}));
</script>

<template>
  <footer v-if="text.copy || auth">
    {{ text.copy }}
    <a v-if="url" :href="url" target="_blank">{{ auth }}.</a>
    <span v-else> {{ auth ? auth : "" }}.</span>
    <br />
    <a
      v-if="coffee && text.coffee && coffee.url"
      :href="coffee.url"
      target="_blank"
      >{{ text.coffee }}</a
    >
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: inline;
}
</style>
