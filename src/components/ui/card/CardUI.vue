<script setup lang="ts">
import { useSlots } from "vue";
import * as Styled from "./CardUI.styles";

defineProps({
  title: String,
});

const slots = useSlots();
</script>

<template>
  <Styled.CardContainer v-if="title || slots['body'] || slots['footer']">
    <Styled.Header>
      <Styled.Title v-if="title">
        {{ title }}
      </Styled.Title>
    </Styled.Header>

    <Styled.BodySlot v-if="slots['body']">
      <slot name="body"></slot>
    </Styled.BodySlot>

    <Styled.FooterSlot v-if="slots['footer']">
      <slot name="footer"></slot>
    </Styled.FooterSlot>
  </Styled.CardContainer>
</template>
