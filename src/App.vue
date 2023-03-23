<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useTitle } from "@vueuse/core";

import ModalFactory from "@/components/modal/ModalFactory";
import GeneralPages from "@/pages/GeneralPages.vue";

const { t } = useI18n();
const title = useTitle();

title.value = t("general.title");
</script>

<template>
  <ModalFactory />
  <GeneralPages />
</template>

<style>
#app {
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
}
</style>
