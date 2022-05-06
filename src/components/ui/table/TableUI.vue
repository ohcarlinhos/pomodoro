<script setup lang="ts">
import * as Styled from "./TableUI.styles";
import type { TableUIColumn, TableUILine } from "./TableUI.types";

type TableUIProps = {
  options?: boolean;
  columns: TableUIColumn[];
  lines: TableUILine[];
  design?: string;
};

withDefaults(defineProps<TableUIProps>(), {
  options: false,
  columns: () => [],
  lines: () => [],
  desing: "",
});
</script>

<template>
  <Styled.Container>
    <Styled.Table>
      <Styled.Row>
        <Styled.Header v-for="column in columns" :key="column.label">
          {{ column.label }}
        </Styled.Header>
        <Styled.Header v-if="options" class="options"> ... </Styled.Header>
      </Styled.Row>

      <Styled.Row v-for="line in lines" :key="line.label">
        <Styled.Cell v-for="column in line.columns" :key="column.label">
          {{ column.label }}
        </Styled.Cell>
        <Styled.Cell v-if="options" class="options"> ... </Styled.Cell>
      </Styled.Row>
    </Styled.Table>
    <Styled.EmptyText v-if="lines.length == 0">
      Nenhum registro encontrado.
    </Styled.EmptyText>
  </Styled.Container>
</template>
