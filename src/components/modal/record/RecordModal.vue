<script setup lang="ts">
import RecordForm from "@/components/form/record/RecordForm.vue";
import type { ActionModal } from "@/components/modal/ModalFactory";

export interface RecordModalProps {
  name?: string;
  finalAction: ActionModal;
}

withDefaults(defineProps<RecordModalProps>(), {
  name: "",
});
</script>

<template>
  <RecordForm :final-action="finalAction" />
</template>
