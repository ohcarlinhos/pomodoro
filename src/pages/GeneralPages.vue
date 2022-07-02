<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
import { RouterView, useRoute } from "vue-router";

import DefaultTemplate from "@/templates/default";
import TheMenu from "@/components/header/menu";
import { pageConfig, type NavLink } from "@/config";
import { authService } from "@/services";

const clickUser = () => window.open(pageConfig.devUrlProfile, "_blank");
const route = useRoute();

const menuLinks = reactive<NavLink[]>([...pageConfig.menu.links]);
const userSession = ref(false);

onMounted(() => {
  userSession.value = authService.hasSession();
});

watch(
  () => route.path,
  async () => {
    userSession.value = authService.hasSession();
  }
);

const navLinks = computed(() => {
  return menuLinks.filter((link) => {
    if (userSession.value && link.hideOnSession) return false;
    return link.session ? userSession.value && !link.hideOnSession : true;
  });
});
</script>

<template>
  <DefaultTemplate>
    <template #header>
      <TheMenu
        v-bind="pageConfig.menu"
        :user-click-action="clickUser"
        :links="navLinks"
      />
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
