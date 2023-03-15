<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    default: 2,
  },
});
</script>

<template>
  <div
    class="loader"
    :style="{
      height: size + 'rem',
      width: size + 'rem',
      borderWidth: size * 0.1 + 'rem',
    }"
  ></div>
</template>

<style scoped>
.loader,
.loader:after {
  border-radius: 50%;
}
.loader {
  --spinner-bg-color: #6969690b;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 5px solid var(--spinner-bg-color);
  border-right: 5px solid var(--spinner-bg-color);
  border-bottom: 5px solid var(--spinner-bg-color);
  border-left: 5px solid #508337;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
