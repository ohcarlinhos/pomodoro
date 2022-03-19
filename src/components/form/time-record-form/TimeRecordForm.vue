<script setup lang="ts">
import InputUI from "../../ui/input/InputUI.vue";
import CardUI from "../../ui/card/CardUI.vue";
</script>

<template>
  <CardUI title="Cadastro de Registro de Tempo">
    <template #body>
      <form class="time-record-form">
        <InputUI id="name" type="text" label="Nome do Registro:" />
        <InputUI id="category" type="text" label="Categoria:" />
        <div class="col">
          <InputUI id="day" type="date" label="Data do Registro:" />
          <InputUI id="time" type="number" label="Tempo:" />
        </div>
      </form>
    </template>
  </CardUI>
</template>

<style lang="sass" scoped>
@import "./TimeRecordForm.sass"
</style>
