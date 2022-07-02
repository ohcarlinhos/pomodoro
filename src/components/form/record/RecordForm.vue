<script setup lang="ts">
import { computed, onMounted, reactive } from "vue";
import { useToast } from "vue-toastification";

import CardUI from "@/components/ui/card/CardUI.vue";
import InputUI from "@/components/ui/input/InputUI.vue";
import ButtonUI from "@/components/ui/button/ButtonUI.vue";
import Select2UI from "@/components/ui/select-2";

import type { RecordForm, RecordFormOptions } from ".";

import {
  formatDate,
  formatWhenFinished,
  makeTagByString,
  recordFormDefault,
  selectOptionsToString,
  categoriesSelectAdapter,
  tagsOptions,
} from ".";

import { useCategoriesStore } from "@/stores/categories";
import { recordsAPI } from "@/services";
import type { RecordUpdateAPI } from "@/services/types";
import type { ActionModal } from "@/components/modal/modal-factory";

export interface RecordFormProps {
  finalAction?: ActionModal;
}

const toast = useToast();
const categoriesStore = useCategoriesStore();

const props = withDefaults(defineProps<RecordFormProps>(), {
  finalAction: () => {
    return;
  },
});

const form = reactive<RecordForm>(recordFormDefault());
const disabled = reactive({ submit: false });
const options = reactive<RecordFormOptions>({
  categories: [],
  tags: [],
});

// Lifecycle

onMounted(async () => {
  try {
    await categoriesStore.requestCategories();
  } catch (err) {
    toast.error("Não foi possível carregar as categorias.");
  }

  options.categories = [
    ...categoriesSelectAdapter(categoriesStore.getCategories),
  ];

  options.tags = [...tagsOptions()];

  setDateAndWhenFinished();
});

// Computeds

const formatedAPIBody = computed<RecordUpdateAPI>(() => {
  return {
    name: form.name,
    category: form.category?.value || "",
    date: form.date,
    seconds: form.minutes * 60 + form.seconds,
    whenFinished: form.whenFinished,
    tags: selectOptionsToString(form.tags),
  };
});

const canSubmit = computed(
  () =>
    !!(form.name && form.category && form.date && form.minutes) &&
    !disabled.submit
);

// Components Actions

const addTags = (searchQuery: unknown) => {
  if (!searchQuery) return;
  const tags = makeTagByString(searchQuery as string);
  options.tags.push(...tags);
  form.tags.push(...tags);
};

// State Actions

const submit = async () => {
  if (!canSubmit.value) return;

  disabled.submit = true;
  try {
    await recordsAPI.post<RecordUpdateAPI>(formatedAPIBody.value);
    toast.success("Registro feito com sucesso!");

    resetForm();
    if (props.finalAction) props.finalAction();
  } catch (err) {
    toast.error("Não foi possível fazer o registro.");
  } finally {
    disabled.submit = false;
  }
};

const resetForm = () => {
  Object.assign(form, recordFormDefault());
  setDateAndWhenFinished();
};

const setDateAndWhenFinished = () => {
  form.date = formatDate();
  form.whenFinished = formatWhenFinished();
};
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

        <Select2UI
          v-model="form.tags"
          :options="options.tags"
          label-name="Tags:"
          label="label"
          track-by="value"
          id="tags"
          taggable
          multiple
          :tagAction="addTags"
        />

        <div class="col">
          <Select2UI
            v-model="form.category"
            :options="options.categories"
            label-name="Categoria"
            label="label"
            track-by="value"
            id="category"
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
