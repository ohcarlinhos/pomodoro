<script setup lang="ts">
import RecordForm from "../../../components/form/record/RecordForm.vue";

export interface RecordModalProps {
  name?: string;
}

withDefaults(defineProps<RecordModalProps>(), {
  name: "",
});
</script>

<template>
  <RecordForm />
</template>

<style lang="scss">
@import "./RecordModal.scss";
</style>
