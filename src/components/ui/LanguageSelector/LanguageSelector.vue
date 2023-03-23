<script setup lang="ts"></script>

<template>
  <div class="lenguage__selector">
    <ul>
      <li v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`">
        <a href="#" @click.prevent="$i18n.locale = locale">{{
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
