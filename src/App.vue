<script setup lang="ts">
import "../src/assets/reset.css";
import "../src/assets/root.css";

import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
#app {
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
}
</style>
