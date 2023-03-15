<script setup lang="ts">
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";

import TheCard from "@/components/ui/TheCard";
import InputField from "@/components/ui/InputField";
import TheButton from "@/components/ui/TheButton";

import type { LoginForm } from ".";

import { computed, reactive, ref } from "vue";
import { authService } from "@/services";

const toast = useToast();
const router = useRouter();

const hiddenButton = ref<HTMLInputElement | null>(null);

const loginFormDefault = (): LoginForm => ({
  email: "",
  password: "",
});

const loginForm = reactive<LoginForm>(loginFormDefault());

const disabled = reactive({
  submit: false,
});

const canSubmit = computed(
  () => !!(loginForm.email && loginForm.password) && !disabled.submit
);

const submit = async (outside = false) => {
  if (!canSubmit.value) return;
  if (outside) return hiddenButton.value?.click();

  try {
    disabled.submit = true;
    await authService.login(loginForm);
    toast.success("Acesso feito com sucesso!");
    await router.push({ name: "panel" });
  } catch (err) {
    toast.error("Senha ou usuário incorretos.");
  } finally {
    disabled.submit = false;
  }
};
</script>

<template>
  <TheCard title="Acessar Painel">
    <template #body>
      <form class="form" @submit.prevent="submit()">
        <InputField
          v-model="loginForm.email"
          id="email"
          type="email"
          label="E-mail"
          required
        />

        <InputField
          v-model="loginForm.password"
          id="password"
          type="password"
          label="Senha"
          required
        />

        <button type="submit" ref="hiddenButton" hidden></button>
      </form>
    </template>
    <template #footer>
      <TheButton
        label="Acessar"
        design="primary"
        :disabled="!canSubmit"
        type="submit"
        full
        @click="submit(true)"
      />
    </template>
  </TheCard>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>
