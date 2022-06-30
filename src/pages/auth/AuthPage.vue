<script setup lang="ts">
import { onMounted } from "vue";
import AuthForm from "@/components/form/auth/AuthForm.vue";
import { authService } from "@/services";
import { useRouter } from "vue-router";

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
@import "./style.scss";
</style>
