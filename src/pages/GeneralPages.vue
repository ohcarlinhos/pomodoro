<script setup lang="ts">
import { USE_PANEL } from "@/global";

import { computed, onMounted, reactive, ref, watch } from "vue";
import { RouterView, useRoute } from "vue-router";

import DefaultTemplate from "@/templates/default";
import TheMenu from "@/components/header/TheMenu";
import { appConfig, type NavLink } from "@/config";
import { authService } from "@/services";

const route = useRoute();

const clickUser = () => window.open(appConfig.menu.user.profile, "_blank");
const menuLinks = reactive<NavLink[]>([...appConfig.menu.links]);
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
        v-if="USE_PANEL"
        v-bind="appConfig.menu"
        :user-click-action="clickUser"
        :links="navLinks"
        :has-nav="USE_PANEL"
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
