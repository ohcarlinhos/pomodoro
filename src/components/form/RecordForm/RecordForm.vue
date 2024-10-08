<script setup lang="ts">
import { computed, onMounted, reactive } from "vue";
import { useToast } from "vue-toastification";

import TheCard from "@/components/ui/TheCard";
import InputField from "@/components/ui/InputField";
import TheButton from "@/components/ui/TheButton";
import TheSelect2 from "@/components/ui/TheSelect2";

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
import type { ActionModal } from "@/components/modal/ModalFactory";

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
  <TheCard title="Registrar Intervalo de Tempo">
    <template #body>
      <div class="record-form">
        <InputField
          v-model="form.name"
          id="name"
          type="text"
          label="Nome do Registro:"
        />

        <TheSelect2
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
          <TheSelect2
            v-model="form.category"
            :options="options.categories"
            label-name="Categoria"
            label="label"
            track-by="value"
            id="category"
          />

          <InputField
            v-model="form.date"
            id="date"
            type="date"
            label="Data do Registro:"
          />
        </div>

        <div class="col col-tree">
          <InputField
            v-model="form.whenFinished"
            id="date"
            type="time"
            label="Finalizado às:"
          />

          <InputField
            v-model="form.minutes"
            mask="###"
            id="minutes"
            label="Minutos:"
          />

          <InputField
            v-model="form.seconds"
            mask="###"
            id="seconds"
            label="Segundos:"
          />
        </div>
      </div>
    </template>
    <template #footer>
      <TheButton
        label="Registrar"
        design="confirm"
        :disabled="!canSubmit"
        full
        @click="submit"
      />
    </template>
  </TheCard>
</template>

<style lang="scss" scoped>
@import "./RecordForm.scss";
</style>
