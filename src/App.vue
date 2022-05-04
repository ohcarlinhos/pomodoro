<script setup lang="ts">
import { computed } from "vue";
import { RouterView } from "vue-router";
import { ThemeProvider } from "vue3-styled-components";
import { theme } from "./styles/theme";

const styleComputed = computed(() => ({ height: "100%", width: "100%" }));
</script>

<template>
  <ThemeProvider :theme="theme" :style="styleComputed">
    <RouterView />
  </ThemeProvider>
</template>

<style lang="sass">
@import "../src/assets/reset.sass"
@import "../src/assets/base.sass"
</style>
