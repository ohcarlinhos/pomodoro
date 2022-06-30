<script setup lang="ts">
import CardUI from "@/components/ui/card/CardUI.vue";
import InputUI from "@/components/ui/input/InputUI.vue";
import ButtonUI from "@/components/ui/button/ButtonUI.vue";
import SelectUI from "@/components/ui/select/SelectUI.vue";

import { computed, onMounted, reactive } from "vue";

import type { RecordForm, RecordFormOptions } from "./RecordForm.types";
import { categoriesOptions, tagsOptions } from "./RecordForm.util";
import { recordsAPI } from "@/services";

const formDefault = (): RecordForm => ({
  name: "",
  category: "",
  date: "",
  whenFinished: "",
  seconds: 0,
  tags: "",
});

const form = reactive<RecordForm>(formDefault());

const disabled = reactive({
  submit: false,
});

const options = reactive<RecordFormOptions>({
  categories: [],
  tags: [],
});

const requestBody = computed(() => {
  return {
    name: form.name,
    category: form.category,
    date: form.date,
    seconds: form.seconds,
    whenFinished: form.whenFinished,
    tags: form.tags,
  };
});

const canSubmit = computed(
  () =>
    !!(form.name && form.category && form.date && form.seconds) &&
    !disabled.submit
);

const submit = async () => {
  if (!canSubmit.value) return;

  disabled.submit = true;
  try {
    await recordsAPI.post<RecordForm>(requestBody.value);
    Object.assign(form, formDefault());
  } catch (err) {
    console.log(err);
  } finally {
    disabled.submit = false;
  }
};

onMounted(() => {
  options.categories = [...categoriesOptions()];
  options.tags = [...tagsOptions()];
});
</script>

<template>
  <CardUI title="Registrar Intervalo de Tempo">
    <template #body>
      <div class="record-form">
        <InputUI
          v-model="form.name"
          id="name"
          type="text"
          label="Nome do Registro:"
        />

        <div class="col">
          <SelectUI
            v-model="form.category"
            :options="options.categories"
            id="category"
            label="Categoria:"
            select-first
          />

          <SelectUI
            v-model="form.tags"
            :options="options.tags"
            id="tags"
            label="Tags:"
          />
        </div>

        <div class="col-tree">
          <InputUI
            v-model="form.date"
            id="date"
            type="date"
            label="Data do Registro:"
          />

          <InputUI
            v-model="form.whenFinished"
            id="date"
            type="time"
            label="Finalizado às:"
          />

          <InputUI v-model="form.seconds" mask="###" id="time" label="Tempo:" />
        </div>
      </div>
    </template>
    <template #footer>
      <ButtonUI
        label="Registrar"
        design="confirm"
        :disabled="!canSubmit"
        full
        @click="submit"
      />
    </template>
  </CardUI>
</template>

<style lang="scss" scoped>
@import "./RecordForm.scss";
</style>
