<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { authService } from "@/services";

import AuthForm from "@/components/form/AuthForm";

onMounted(() => {
  if (authService.hasSession()) {
    useRouter().push({ name: "panel" });
  }
});
</script>

<template>
  <div class="auth__container">
    <AuthForm />
  </div>
</template>

<style lang="scss" scoped>
@import "./AuthPage.scss";
</style>
