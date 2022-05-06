<script setup lang="ts">
import type { LinkProps } from "../link/Link.vue";
import Nav from "../nav/Nav.vue";

export type MenuProps = {
  title: string;
  links?: LinkProps[];
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
