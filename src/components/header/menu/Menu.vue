<script setup lang="ts">
import type { NavLinkProps } from "../nav-link/NavLink.vue";
import Nav from "../nav/Nav.vue";

export type MenuProps = {
  title: string;
  links?: NavLinkProps[];
};

withDefaults(defineProps<MenuProps>(), {
  links: () => [],
});
</script>

<template>
  <section class="menu">
    <h2 class="title">{{ title }}</h2>
    <Nav :links="links" />
  </section>
</template>

<style lang="sass" scoped>
@import "./Menu.sass"
</style>
