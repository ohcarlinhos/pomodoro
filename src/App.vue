<script setup lang="ts">
import ModalFactory from "@/components/modal/modal-factory/ModalFactory.vue";
import GeneralPages from "@/pages/GeneralPages.vue";
</script>

<template>
  <ModalFactory />
  <GeneralPages />
</template>

<style>
@import "../src/assets/reset.css";
@import "../src/assets/root.css";

@import "vue-multiselect/dist/vue-multiselect.css";

#app {
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
}
</style>
