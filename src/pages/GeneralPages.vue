<script setup lang="ts">
import { reactive } from "vue";
import { RouterView } from "vue-router";

import DefaultTemplate from "@/templates/default/DefaultTemplate.vue";
import TheMenu from "@/components/header/menu/TheMenu.vue";

const page = reactive({
  menu: {
    logo: {
      title: "Registros",
      logoImage: "",
      uppercase: true,
      url: "home",
    },
    userImage:
      "https://gravatar.com/avatar/9a82ba52769cbc22951a7cf516124307?s=250",
  },
});
</script>

<template>
  <DefaultTemplate>
    <template #header>
      <TheMenu v-bind="page.menu" />
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
