<script setup lang="ts">
import { RouterView } from "vue-router";

import DefaultTemplate from "@/templates/default/DefaultTemplate.vue";
import TheMenu from "@/components/header/menu/TheMenu.vue";
import { pageConfig } from "@/config";

const clickUser = () => window.open(pageConfig.devUrlProfile, "_blank");
</script>

<template>
  <DefaultTemplate>
    <template #header>
      <TheMenu v-bind="pageConfig.menu" :user-click-action="clickUser" />
    </template>

    <template #content>
      <div class="router__content"><RouterView /></div>
    </template>
  </DefaultTemplate>
</template>

<style lang="scss" scoped>
.router__content {
  position: relative;
}
</style>
