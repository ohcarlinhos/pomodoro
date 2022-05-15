<script setup lang="ts">
export interface DefaultTemplateProps {
  scrollAction: (e: UIEvent) => void;
}

withDefaults(defineProps<DefaultTemplateProps>(), {
  scrollAction: () => {
    return;
  },
});
</script>

<template>
  <div class="template__container">
    <div class="header">
      <slot name="header"></slot>
    </div>

    <div class="body">
      <div
        class="body__content"
        @scroll="scrollAction"
        @touchend="scrollAction"
      >
        <div class="body__center">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./DefaultTemplate.scss";
</style>
