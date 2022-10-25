<script setup lang="ts">
import type { LogoProps } from "../logo/TheLogo.vue";
import TheLogo from "../logo/TheLogo.vue";
import ImageBoxUI from "../../ui/image/ImageBoxUI.vue";
import Nav from "../nav/Nav.vue";

import type { LinkProps } from "../link/TheLink.vue";
import type { UserMenu } from "./types";

export interface MenuProps {
  logo: LogoProps;
  user?: UserMenu | null;
  userClickAction?: () => void;
  links?: LinkProps[];
  hasNav: boolean;
}

const props = withDefaults(defineProps<MenuProps>(), {
  user: null,
  userClickAction: () => {
    return;
  },
  links: () => [],
  hasNav: false,
});

const clickUser = () => {
  if (props.user && props.user.clickable) props.userClickAction();
};
</script>

<template>
  <div class="menu__container">
    <TheLogo v-bind="logo" />
    <Nav v-if="links.length && hasNav" :links="links" />
    <div
      v-if="user && user.image"
      class="menu__user"
      :class="{ clickable: user && user.clickable }"
      @click="clickUser"
    >
      <ImageBoxUI
        :url="user && user.image"
        :title="user && user.name"
        radius="20px"
        min-height="40px"
      />
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
  gap: 15px;
}

.clickable {
  cursor: pointer;
}

.menu__user {
  height: 100%;
  width: 40px;
}
</style>
