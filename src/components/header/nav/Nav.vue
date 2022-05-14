<script setup lang="ts">
import TheLink, { type LinkProps } from "../link/TheLink.vue";

withDefaults(defineProps<{ links: LinkProps[] }>(), {
  links: () => [],
});
</script>

<template>
  <nav v-if="links.length" class="nav-grid">
    <TheLink v-for="link of links" :key="link.id" v-bind="link" />
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  gap: 10px;
}
</style>
