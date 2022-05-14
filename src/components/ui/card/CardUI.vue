<script setup lang="ts">
import { useSlots } from "vue";

defineProps({
  title: String,
});

const slots = useSlots();
</script>

<template>
  <div class="card__container" v-if="title || slots['body'] || slots['footer']">
    <div class="card__header">
      <div class="title" v-if="title">
        {{ title }}
      </div>
    </div>

    <div class="card__body" v-if="slots['body']">
      <slot name="body"></slot>
    </div>

    <div class="card__footer" v-if="slots['footer']">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import "./CardUI.scss";
</style>
