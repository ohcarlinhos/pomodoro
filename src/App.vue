<script setup lang="ts">
import "../src/styles/reset.css";
import "../src/styles/root.css";

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

<style>
#app {
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
}
</style>
