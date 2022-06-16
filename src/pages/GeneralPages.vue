<script setup lang="ts">
import { RouterView } from "vue-router";

import DefaultTemplate from "@/templates/default";
import TheMenu from "@/components/header/menu";
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
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>
