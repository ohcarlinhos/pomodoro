<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { handleI18n } from "@/i18n/util";

export interface TheLogoProps {
  title: string;
  url?: string;
  alt?: string;
  logoImage?: string;
  uppercase?: boolean;
}

const props = withDefaults(defineProps<TheLogoProps>(), {
  url: "",
  alt: "",
  uppercase: false,
});

const text = computed(() => ({
  title: handleI18n(props.title),
  alt: handleI18n(props.alt),
}));
</script>

<template>
  <div class="logo__container">
    <RouterLink
      :to="{ name: url }"
      :title="text.alt || text.title"
      :class="{ disabled: !url }"
      class="logo__url"
    >
      <img
        v-if="logoImage"
        :src="logoImage"
        :alt="text.alt || text.title"
        :title="text.alt || text.title"
        class="logo__image"
      />
      <h1
        v-show="!logoImage"
        class="logo__title"
        :class="{ uppercase: uppercase }"
      >
        {{ text.title }}
      </h1>
    </RouterLink>
  </div>
</template>

<style scoped>
.logo__container {
  display: flex;
}
.logo__title {
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: 3.5rem;
  line-height: 3.5rem;
  font-weight: 900;
  transition: 0.2s;
}
.uppercase {
  text-transform: uppercase;
}

.logo__image {
  height: 3.5rem;
}

.logo__title:hover {
  color: #0e0e0e;
}

.disabled {
  pointer-events: none;
}
</style>
