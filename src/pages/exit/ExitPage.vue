<script setup lang="ts">
import { onMounted } from "vue";

import { authService } from "@/services";
import { useRouter } from "vue-router";

onMounted(() => {
  authService.cleanSession();
  useRouter().push({ name: "home" });
});
</script>

<template>
  <span>Bye!</span>
</template>
