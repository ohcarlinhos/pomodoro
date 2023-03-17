<script setup lang="ts">
import ModalFactory from "@/components/modal/ModalFactory";
import GeneralPages from "@/pages/GeneralPages.vue";

import { useTitle } from "@vueuse/core";
import { appConfig } from "./config";

const title = useTitle();
title.value = appConfig.general.title;
</script>

<template>
  <ModalFactory />
  <GeneralPages />
</template>

<style>
@import "the-new-css-reset/css/reset.css";
@import "../src/assets/root.css";

@import "vue-multiselect/dist/vue-multiselect.css";

#app {
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
}
</style>
