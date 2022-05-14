<script setup lang="ts">
export interface LogoProps {
  title: string;
  url?: string;
  logoImage?: string;
  uppercase?: boolean;
}

withDefaults(defineProps<LogoProps>(), {
  url: "",
  uppercase: false,
});
</script>

<template>
  <div class="logo__container">
    <RouterLink
      :to="{ name: url }"
      :title="title"
      :class="{ disabled: !url }"
      class="logo__url"
    >
      <img
        v-if="logoImage"
        :src="logoImage"
        :alt="title"
        :title="title"
        class="logo__image"
      />
      <h1
        v-show="!logoImage"
        class="logo__title"
        :class="{ uppercase: uppercase }"
      >
        {{ title }}
      </h1>
    </RouterLink>
  </div>
</template>

<style scoped>
.logo__container {
  display: flex;
}
.logo__title {
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
