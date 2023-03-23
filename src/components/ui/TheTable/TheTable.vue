<script setup lang="ts">
import { computed } from "vue";

import type {
  TheTableColumn,
  TheTableLine,
  TheTableAction,
  TheTableOrderPayload,
  TheTableActionPayload,
} from "./TheTable.types";
import ThePagination from "@/components/ui/ThePagination";

import { iconList } from "./icons";
import { handleI18n } from "@/i18n/util";

export interface TheTableProps {
  actions?: TheTableAction[];
  columns: TheTableColumn[];
  lines?: TheTableLine[];
  design?: string;
  perPage?: number;
  firstPage?: number;
  selectedPage?: number;
  totalItems?: number;
  selectPage?: (page: number) => void;
}

const props = withDefaults(defineProps<TheTableProps>(), {
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

const handleAction = (payload: TheTableActionPayload) => {
  emit("table:action", payload);
};

const handleOrder = (payload: TheTableOrderPayload) => {
  emit("table:order", payload);
};

const filterLines = computed(() => {
  const lineList: TheTableLine[] = [];
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
            :title="handleI18n(column.label)"
          >
            <div class="filters">
              <span>{{ handleI18n(column.label) }}</span>
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
                :title="handleI18n(action.label)"
              >
                <div v-if="action.icon" class="action__icon">
                  <Component
                    :is="findComponent(action.icon)"
                    @click="handleAction({ action: action.action, line })"
                  />
                </div>
                <span v-else>{{ handleI18n(action.label) }}</span>
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
    <ThePagination
      :total="totalItems"
      :per-page="perPage"
      :first-page="firstPage"
      :selected="selectedPage"
      @pagination:select-page="selectPage"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "./TheTable.scss";
</style>
