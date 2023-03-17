<script setup lang="ts">
import { computed } from "vue";

export type TheLinkProps = {
  id: string | number;
  label: string;
  url: string;
  a?: boolean;
  disabled?: boolean;
  target?: string;
};

const props = withDefaults(defineProps<TheLinkProps>(), {
  label: "Link",
  a: true,
  disabled: false,
  target: "",
});

const ariaLink = computed(() => ({
  able: `Acessar ${props.label}`,
  disable: `Endereço de ${props.label} desativado.`,
}));
</script>

<template>
  <span :class="{ disabled }">
    <span v-if="disabled" class="link" :aria-label="ariaLink.disable">
      {{ label }}
    </span>

    <RouterLink
      v-else-if="!a"
      :to="{ name: url }"
      :aria-label="ariaLink.able"
      :target="target"
      class="link"
    >
      {{ label }}
    </RouterLink>

    <a
      v-else
      :href="url"
      :aria-label="ariaLink.able"
      :target="target"
      class="link"
    >
      {{ label }}
    </a>
  </span>
</template>
