<script setup lang="ts">
import type { LogoProps } from "../logo/TheLogo.vue";
import TheLogo from "../logo/TheLogo.vue";
import ImageBoxUI from "../../ui/image/ImageBoxUI.vue";

export interface MenuProps {
  logo: LogoProps;
  userImage?: string;
}

withDefaults(defineProps<MenuProps>(), {
  userImage: "",
});

defineEmits(["menu:open-favorite", "menu:open-cart"]);
</script>

<template>
  <div class="menu__container">
    <TheLogo v-bind="logo" />
    <a
      href="https://youtu.be/-PlAg8R9TG4"
      class="link__surprise"
      target="_blank"
    >
      Clique aqui!
    </a>
    <div v-if="userImage" class="menu__user">
      <ImageBoxUI :url="userImage" radius="20px" min-height="40px" />
    </div>
  </div>
</template>

<style scoped>
.menu__container {
  display: flex;
  width: 100%;
  padding: 10px 25px;
  background: #fff;
  align-items: center;
  justify-content: space-between;
  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.1));
  gap: 15px;
}

.menu__user {
  height: 100%;
  width: 40px;
}

.link__surprise {
  color: #fff;
}
</style>
