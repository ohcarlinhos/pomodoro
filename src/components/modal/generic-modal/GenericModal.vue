<script setup lang="ts">
import TheButton, { TheButtonProps } from "@/components/ui/TheButton";

export interface GenericModalProps {
  title: string;
  body: string;
  button?: TheButtonProps;
  size?: string;
  alignCenter?: boolean;
  buttonAction?: () => void;
}

const props = withDefaults(defineProps<GenericModalProps>(), {
  title: "",
  body: "",
  size: "",
  alignCenter: false,
  buttonAction: () => {
    return;
  },
});
</script>

<template>
  <div
    class="modal__container"
    :class="{ center: alignCenter, [props.size]: true }"
  >
    <h2 class="modal__title">{{ title }}</h2>
    <div class="modal__body">
      {{ body }}
    </div>
    <TheButton v-if="button" v-bind="button" radius @click="buttonAction" />
  </div>
</template>

<style lang="scss" scoped>
@import "./GenericModal.scss";
</style>
