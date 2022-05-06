<script setup lang="ts">
import { computed } from "vue";
import * as Styled from "./Link.styles";

export type LinkProps = {
  id: string | number;
  label: string;
  url: string;
  a?: boolean;
  disabled?: boolean;
};

const props = withDefaults(defineProps<LinkProps>(), {
  label: "Link",
  a: false,
  disabled: false,
});

const ariaLink = computed(() => ({
  able: `Acessar ${props.label}`,
  disable: `Endereço de ${props.label} desativado.`,
}));
</script>

<template>
  <Styled.Link :disabled="disabled">
    <span v-if="disabled" class="link" :aria-label="ariaLink.disable">
      {{ label }}
    </span>

    <a v-else-if="a" :href="url" class="link" :aria-label="ariaLink.able">
      {{ label }}
    </a>

    <RouterLink
      v-else
      :to="{ name: url }"
      :aria-label="ariaLink.able"
      class="link"
    >
      {{ label }}
    </RouterLink>
  </Styled.Link>
</template>
