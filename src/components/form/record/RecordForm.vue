<script setup lang="ts">
import { computed, onMounted, reactive } from "vue";
import { useToast } from "vue-toastification";

import CardUI from "@/components/ui/card/CardUI.vue";
import InputUI from "@/components/ui/input/InputUI.vue";
import ButtonUI from "@/components/ui/button/ButtonUI.vue";
import SelectUI from "@/components/ui/select/SelectUI.vue";

import type { RecordForm, RecordFormOptions } from ".";
import { categoriesSelectAdapter, tagsOptions } from ".";

import { useCategoriesStore } from "@/stores/categories";
import { recordsAPI } from "@/services";
import type { RecordUpdateAPI } from "@/services/types";

const toast = useToast();

const formDefault = (): RecordForm => ({
  name: "",
  category: "",
  date: "",
  whenFinished: "",
  minutes: 0,
  seconds: 0,
  tags: "",
});

const categoriesStore = useCategoriesStore();

const form = reactive<RecordForm>(formDefault());
const disabled = reactive({ submit: false });
const options = reactive<RecordFormOptions>({
  categories: [],
  tags: [],
});

const requestBody = computed<RecordUpdateAPI>(() => {
  return {
    name: form.name,
    category: form.category,
    date: form.date,
    seconds: form.minutes * 60 + form.seconds,
    whenFinished: form.whenFinished,
    tags: form.tags,
  };
});

const canSubmit = computed(
  () =>
    !!(form.name && form.category && form.date && form.minutes) &&
    !disabled.submit
);

const submit = async () => {
  if (!canSubmit.value) return;

  disabled.submit = true;
  try {
    await recordsAPI.post<RecordUpdateAPI>(requestBody.value);
    toast.success("Registro feito com sucesso!");
    Object.assign(form, formDefault());
  } catch (err) {
    toast.error("Não foi possível fazer o registro.");
  } finally {
    disabled.submit = false;
  }
};

onMounted(async () => {
  await categoriesStore.requestCategories();
  options.categories = [
    ...categoriesSelectAdapter(categoriesStore.getCategories),
  ];
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

        <SelectUI
          v-model="form.tags"
          :options="options.tags"
          id="tags"
          label="Tags:"
        />

        <div class="col">
          <SelectUI
            v-model="form.category"
            :options="options.categories"
            id="category"
            label="Categoria:"
            select-first
          />

          <InputUI
            v-model="form.date"
            id="date"
            type="date"
            label="Data do Registro:"
          />
        </div>

        <div class="col col-tree">
          <InputUI
            v-model="form.whenFinished"
            id="date"
            type="time"
            label="Finalizado às:"
          />

          <InputUI
            v-model="form.minutes"
            mask="###"
            id="minutes"
            label="Minutos:"
          />

          <InputUI
            v-model="form.seconds"
            mask="###"
            id="seconds"
            label="Segundos:"
          />
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
@import "./style.scss";
</style>
