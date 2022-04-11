<script setup lang="ts">
import DefaultTemplate from "@/templates/DefaultTemplate.vue";
import RecordForm from "@/components/form/record/RecordForm.vue";
</script>

<template>
  <DefaultTemplate>
    <template #body>
      <div class="page">
        <RecordForm />
      </div>
    </template>
  </DefaultTemplate>
</template>

<style scoped lang="sass">
@media (min-width: 1024px)
  .page
    height: 100%
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    filter: drop-shadow(0px 4px 19px rgba(0, 0, 0, 0.1))
</style>
