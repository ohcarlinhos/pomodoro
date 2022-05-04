<script setup lang="ts">
import NavLink, { type NavLinkProps } from "../nav-link/NavLink.vue";

withDefaults(defineProps<{ links: NavLinkProps[] }>(), {
  links: () => [],
});
</script>

<template>
  <nav v-if="links.length" class="nav-link">
    <NavLink v-for="link of links" :key="link.id" v-bind="link" />
  </nav>
</template>

<style lang="sass" scoped>
@import "./Nav.sass"
</style>
