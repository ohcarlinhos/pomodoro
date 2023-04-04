<script setup lang="ts">
import { storageService } from "@/services";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const saveLangPrefer = (lang: string) => {
  locale.value = lang;
  storageService.save("lang", lang);
};
</script>

<template>
  <div class="lenguage__selector">
    <ul>
      <li v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`">
        <a href="#" @click.prevent="saveLangPrefer(locale)">{{
          $t(`locales.${locale}`)
        }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.lenguage__selector {
  width: 100%;
  text-align: center;
  margin-bottom: 15px;

  li {
    display: inline;
    padding: 7px;
  }
}
</style>
