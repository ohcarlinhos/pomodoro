<script setup lang="ts">
import { computed } from "vue";

import type {
  TableUIColumn,
  TableUILine,
  TableUIAction,
  TableUIOrderPayload,
  TableUIActionPayload,
} from "./TableUI.types";
import PaginationUI from "../pagination/PaginationUI.vue";

import { iconList } from "./icons";

export interface TableUIProps {
  actions?: TableUIAction[];
  columns: TableUIColumn[];
  lines?: TableUILine[];
  design?: string;
  perPage?: number;
  firstPage?: number;
  selectedPage?: number;
  totalItems?: number;
  selectPage?: (page: number) => void;
}

const props = withDefaults(defineProps<TableUIProps>(), {
  actions: () => [],
  columns: () => [],
  lines: () => [],
  desing: "",
  perPage: 10,
  firstPage: 1,
  selectedPage: 1,
  totalItems: 0,
  selectPage: () => {
    return;
  },
});

const emit = defineEmits(["table:action", "table:order"]);

const findComponent = (iconName: string) => {
  return iconList.find((list) => list.name == iconName)?.component;
};

const handleAction = (payload: TableUIActionPayload) => {
  emit("table:action", payload);
};

const handleOrder = (payload: TableUIOrderPayload) => {
  emit("table:order", payload);
};

const filterLines = computed(() => {
  const lineList: TableUILine[] = [];
  if (props.lines.length == 0) return lineList;

  const perPage = props.perPage != 0 ? props.perPage : 10;

  for (let i = 0; i < perPage; i++) {
    if (!props.lines[i]) break;
    lineList.push(props.lines[i]);
  }

  return lineList;
});
</script>

<template>
  <div class="table__containter">
    <table v-if="columns.length || lines.length">
      <tbody>
        <tr class="table__header">
          <th
            v-for="column in columns"
            :key="column.label"
            :width="column.width"
          >
            <div class="filters">
              <span>{{ column.label }}</span>
              <div v-if="column.sort" class="column__filter">
                <Component
                  :is="findComponent(column.order == 'desc' ? 'desc' : 'asc')"
                  @click="handleOrder({ order: column.order!, column })"
                />
              </div>
            </div>
          </th>
          <th v-if="actions.length" class="actions">...</th>
        </tr>

        <tr v-for="line in filterLines" :key="line.label">
          <td v-for="column in line.columns" :key="column.label">
            {{ column.label }}
          </td>
          <td v-if="actions.length" class="actions">
            <div class="buttons">
              <button
                v-for="action in actions"
                :key="action.id"
                :title="action.label"
              >
                <div v-if="action.icon" class="action__icon">
                  <Component
                    :is="findComponent(action.icon)"
                    @click="handleAction({ action: action.action, line })"
                  />
                </div>
                <span v-else>{{ action.label }}</span>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="empty__text" v-if="filterLines.length == 0">
      Nenhum registro encontrado.
    </div>
  </div>

  <div class="table__pagination" v-if="totalItems > perPage">
    <PaginationUI
      :total="totalItems"
      :per-page="perPage"
      :first-page="firstPage"
      :selected="selectedPage"
      @pagination:select-page="selectPage"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "./TableUI.scss";
</style>
