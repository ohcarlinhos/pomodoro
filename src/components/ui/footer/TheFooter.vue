<script setup lang="ts">
defineProps({
  copy: { type: String, default: "" },
  auth: { type: String, default: "" },
  linkAuth: { type: String, default: "" },
});
</script>

<template>
  <footer v-if="copy || auth">
    <template v-if="linkAuth">
      {{ copy }}
      <a :href="linkAuth" target="_blank">{{ auth }}</a
      >.
    </template>
    <template v-else> {{ copy }} {{ auth ? auth + "." : "" }}</template>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: inline;
}
</style>
