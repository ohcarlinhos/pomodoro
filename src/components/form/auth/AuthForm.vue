<script setup lang="ts">
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";

import CardUI from "@/components/ui/card/CardUI.vue";
import InputUI from "@/components/ui/input/InputUI.vue";
import ButtonUI from "@/components/ui/button/ButtonUI.vue";

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
  <CardUI title="Acessar Painel">
    <template #body>
      <form class="form" @submit.prevent="submit()">
        <InputUI
          v-model="loginForm.email"
          id="email"
          type="email"
          label="E-mail"
          required
        />

        <InputUI
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
      <ButtonUI
        label="Acessar"
        design="primary"
        :disabled="!canSubmit"
        type="submit"
        full
        @click="submit(true)"
      />
    </template>
  </CardUI>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>
