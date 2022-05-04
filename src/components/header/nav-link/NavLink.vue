<script setup lang="ts">
import { computed } from "vue";

export type NavLinkProps = {
  id: number;
  label: string;
  url: string;
  a?: boolean;
  disabled?: boolean;
};

const props = withDefaults(defineProps<NavLinkProps>(), {
  label: "Link",
  a: false,
  disabled: false,
});

const urlName = computed(() => ({
  name: props.url,
}));
</script>

<template>
  <RouterLink v-if="!a" :to="urlName" class="link">{{ label }}</RouterLink>
  <a v-else :href="url">{{ label }}</a>
</template>

<style lang="sass" scoped>
@import "./NavLink.sass"
</style>
