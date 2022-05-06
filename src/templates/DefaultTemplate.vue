<script setup lang="ts"></script>

<template>
  <div class="template-area">
    <div v-if="$slots.header" class="header-slot">
      <slot name="header"> </slot>
    </div>

    <div class="body-slot">
      <slot name="body"> </slot>
    </div>
  </div>
</template>

<style scoped>
.template-area {
  width: 100%;
  height: 100%;
  display: flex;
  background: #f8f8f8;
}

.header-slot {
  height: 100%;
  min-width: 250px;
  padding: 15px;
}

.body-slot {
  height: 100%;
  width: 100%;
  padding: 15px;
}
</style>
