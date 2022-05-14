<script setup lang="ts">
import { onDeactivated, reactive } from "vue";
import { ImageIcon } from "../../icons";

export interface ImageUIProps {
  title?: string;
  url: string;
  radius?: string;
  minHeight?: string;
  srcImageOnMobile?: boolean;
}

withDefaults(defineProps<ImageUIProps>(), {
  title: "",
  url: "",
  radius: "0px",
  minHeight: "inherit",
  srcImageOnMobile: false,
});

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
    class="image-ui__container"
    :title="title"
    :style="{ borderRadius: radius, minHeight: minHeight }"
  >
    <img
      v-if="srcImageOnMobile && windowView.width <= 992"
      class="image-ui__image"
      :src="url"
      alt=" "
      :title="title"
      :style="{ borderRadius: radius }"
    />

    <div
      v-else
      class="image-ui__bg"
      :style="{
        backgroundImage: `url(${url})`,
        borderRadius: radius,
        minHeight: minHeight,
      }"
    ></div>

    <ImageIcon class="image-ui__icon" />
  </div>
</template>

<style scoped>
.image-ui__container {
  background: #dee4ed;
  width: 100%;
  display: flex;
}
.image-ui__image {
  width: 100%;
  z-index: 10;
  padding: 0;
  margin: 0;
}
.image-ui__bg {
  z-index: 10;
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
  aspect-ratio: 1/1;
  background-size: 100%;
  background-position: center center;
  transition: all 300ms ease-in-out;
}

@media (min-width: 992px) {
  .image-ui__bg:hover {
    background-size: 110%;
  }
}

.image-ui__default {
  width: 100%;
  display: flex;
  aspect-ratio: 1/1;
}

.image-ui__icon {
  width: 100%;
  z-index: 5;
  height: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: #9eadba;
}
</style>
