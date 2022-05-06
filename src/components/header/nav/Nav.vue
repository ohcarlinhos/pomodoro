<script setup lang="ts">
import * as Styled from "./Nav.styles";
import Link, { type LinkProps } from "../link/Link.vue";

withDefaults(defineProps<{ links: LinkProps[] }>(), {
  links: () => [],
});
</script>

<template>
  <Styled.Nav v-if="links.length" class="nav-grid">
    <Link v-for="link of links" :key="link.id" v-bind="link" />
  </Styled.Nav>
</template>
