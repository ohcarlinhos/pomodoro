<script setup lang="ts">
import ButtonUI from "../../ui/button/ButtonUI.vue";

export interface GenericModalProps {
  title: string;
  body: string;
  button?: string;
  size?: string;
  alignCenter?: boolean;
  buttonAction?: () => void;
}

const props = withDefaults(defineProps<GenericModalProps>(), {
  title: "",
  body: "",
  button: "",
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
    <ButtonUI v-if="button" :label="button" radius @click="buttonAction" />
  </div>
</template>

<style lang="scss">
@import "./GenericModal.scss";
</style>
