<script setup lang="ts">
import { onDeactivated, reactive } from "vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiPhotograph } from "oh-vue-icons/icons";

export interface ImageBoxProps {
  title?: string;
  url: string;
  radius?: string;
  minHeight?: string;
  srcImageOnMobile?: boolean;
}

withDefaults(defineProps<ImageBoxProps>(), {
  title: "",
  url: "",
  radius: "0px",
  minHeight: "inherit",
  srcImageOnMobile: false,
});

const PhotoIcon = HiPhotograph;
addIcons(PhotoIcon);

const windowView = reactive({
  width: 0,
  height: 0,
});

onDeactivated(() => {
  window.removeEventListener("resize", handleResize);
});

const handleResize = () => {
  windowView.width = window.innerWidth;
  windowView.height = window.innerHeight;
};

window.addEventListener("resize", handleResize);
handleResize();
</script>

<template>
  <div
    class="image-box__container"
    :title="title"
    :style="{ borderRadius: radius, minHeight: minHeight }"
  >
    <img
      v-if="srcImageOnMobile && windowView.width <= 992"
      class="image-box__image"
      :src="url"
      alt=" "
      :title="title"
      :style="{ borderRadius: radius }"
    />

    <div
      v-else
      class="image-box__bg"
      :style="{
        backgroundImage: `url(${url})`,
        borderRadius: radius,
        minHeight: minHeight,
      }"
    ></div>

    <OhVueIcon :name="PhotoIcon.name" class="image-box__icon" fill="#9eadba" />
  </div>
</template>

<style lang="scss">
@import "./ImageBox.scss";
</style>
