<script setup lang="ts">
import type { LogoProps } from "../logo/TheLogo.vue";
import TheLogo from "../logo/TheLogo.vue";
import ImageBoxUI from "../../ui/image/ImageBoxUI.vue";
import Nav from "../nav/Nav.vue";
import type { LinkProps } from "../link/TheLink.vue";

export interface MenuProps {
  logo: LogoProps;
  userImage?: string;
  userName?: string;
  userClickable?: boolean;
  userClickAction?: () => void;
  links?: LinkProps[];
}

const props = withDefaults(defineProps<MenuProps>(), {
  userImage: "",
  userName: "",
  userClickable: false,
  userClickAction: () => {
    return;
  },
  links: () => [],
});

defineEmits(["menu:open-favorite", "menu:open-cart"]);

const clickUser = () => {
  if (props.userClickable) props.userClickAction();
};
</script>

<template>
  <div class="menu__container">
    <TheLogo v-bind="logo" />
    <Nav v-if="links.length && false" :links="links" />
    <div
      v-if="userImage"
      class="menu__user"
      :class="{ clickable: userClickable }"
      @click="clickUser"
    >
      <ImageBoxUI
        :url="userImage"
        :title="userName"
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
