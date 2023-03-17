<script setup lang="ts">
import {
  onMounted,
  onBeforeUnmount,
  reactive,
  defineAsyncComponent,
  computed,
} from "vue";

import { useModal } from "@/hooks/useModal";
import type { ModalStateInterface } from "./types";

const modal = useModal();

const modalList = [
  {
    name: "generic",
    component: defineAsyncComponent({
      loader: () => import("../GenericModal"),
    }),
  },
  {
    name: "record-form",
    component: defineAsyncComponent({
      loader: () => import("../RecordModal"),
    }),
  },
];

const DinamicComponent = computed(() => {
  return modalList.find((list) => list.name == modalState.name)?.component;
});

const modalState = reactive<ModalStateInterface<unknown>>({
  name: "",
  status: false,
  props: {},
});

onMounted(() => {
  modal.listen(handleModalToogle);
});

onBeforeUnmount(() => {
  modal.off(handleModalToogle);
});

const handleModalToogle = (payload: ModalStateInterface<unknown>) => {
  if (payload.status) {
    modalState.name = payload.name;
    modalState.props = payload.props;
  } else {
    modalState.name = "";
    modalState.props = {};
  }
  modalState.status = payload.status;
};

const closeModal = () => {
  modal.close();
};
</script>

<template>
  <Transition name="modal">
    <div v-show="modalState.status" class="modal-factory__container">
      <Transition name="component">
        <DinamicComponent
          v-if="DinamicComponent"
          class="modal__dinamic"
          v-bind="modalState.props"
        />
      </Transition>
      <div class="modal__exit" @click="closeModal"></div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
@import "./ModalFactory.scss";
</style>
