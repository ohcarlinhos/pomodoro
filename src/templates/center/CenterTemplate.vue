<script setup lang="ts">
import { reactive } from "vue";

import DefaultTemplate from "@/templates/DefaultTemplate.vue";
import Menu from "@/components/header/menu/Menu.vue";
import Footer from "@/components/footer/Footer.vue";

const page = reactive({
  title: "Salva meu Tempo!",
  copy: "Desenvolvido por",
  auth: "Carlos Roberto",
  linkAuth: "https://github.com/caarlos1",
  links: [
    {
      id: 1,
      label: "Formulário",
      url: "home",
    },
    {
      id: 2,
      label: "Lista",
      url: "status",
    },
  ],
});
</script>

<template>
  <DefaultTemplate>
    <template #body>
      <div class="page">
        <Menu :title="page.title" :links="page.links" />
        <slot> </slot>
        <Footer
          :copy="page.copy"
          :auth="page.auth"
          :link-auth="page.linkAuth"
        />
      </div>
    </template>
  </DefaultTemplate>
</template>

<style scoped>
@media (min-width: 1024px) {
  .page {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
  }
}
</style>
