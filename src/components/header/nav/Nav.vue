<script setup lang="ts">
import TheLink, { type TheLinkProps } from "@/components/ui/TheLink";

withDefaults(defineProps<{ links: TheLinkProps[] }>(), {
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
