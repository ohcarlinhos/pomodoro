<script setup lang="ts">
import TheLogo, { type TheLogoProps } from "@/components/ui/TheLogo";
import ImageBox from "@/components/ui/ImageBox";
import TheNav from "@/components/header/TheNav";

import type { TheLinkProps } from "@/components/ui/TheLink";
import type { UserMenu } from "./types";

export interface TheMenuProps {
  logo: TheLogoProps;
  user?: UserMenu | null;
  links?: TheLinkProps[];
  hasNav?: boolean;
}

const emit = defineEmits(["click-user"]);

const props = withDefaults(defineProps<TheMenuProps>(), {
  user: null,
  links: () => [],
  hasNav: false,
});

const clickUser = () => {
  if (props.user && props.user.clickable) emit("click-user");
};
</script>

<template>
  <div class="menu__container">
    <TheLogo v-bind="logo" />
    <TheNav v-if="links.length && hasNav" :links="links" />
    <div
      v-if="user && user.image"
      class="menu__user"
      :class="{ clickable: user && user.clickable }"
      @click="clickUser"
    >
      <ImageBox
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
