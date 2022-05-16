<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import type {
  TableUIColumn,
  TableUILine,
  TableUIActions,
} from "./TableUI.types";

export interface TableUIProps {
  actions?: TableUIActions[];
  columns: TableUIColumn[];
  lines: TableUILine[];
  design?: string;
}

withDefaults(defineProps<TableUIProps>(), {
  actions: () => [],
  columns: () => [],
  lines: () => [],
  desing: "",
});

const emit = defineEmits(["table:action"]);

const iconList = [
  {
    name: "edit",
    component: defineAsyncComponent({
      loader: () => import("../../icons/EditIcon.vue"),
    }),
  },
  {
    name: "delete",
    component: defineAsyncComponent({
      loader: () => import("../../icons/TrashIcon.vue"),
    }),
  },
];

const findComponent = (iconName: string) => {
  return iconList.find((list) => list.name == iconName)?.component;
};

const handleAction = (line: TableUILine) => {
  emit("table:action", line);
};
</script>

<template>
  <div class="table__containter">
    <table v-if="columns.length || lines.length">
      <tbody>
        <tr>
          <th
            v-for="column in columns"
            :key="column.label"
            :style="{ minWidth: column.minWidth }"
          >
            {{ column.label }}
          </th>
          <th v-if="actions.length" class="actions">...</th>
        </tr>

        <tr v-for="line in lines" :key="line.label">
          <td v-for="column in line.columns" :key="column.label">
            {{ column.label }}
          </td>
          <td v-if="actions.length" class="actions">
            <button
              v-for="action in actions"
              :key="action.id"
              :title="action.label"
            >
              <div v-if="action.icon" class="action__icon">
                <Component
                  :is="findComponent(action.icon)"
                  @click="handleAction(line)"
                />
              </div>
              <span v-else>{{ action.label }}</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="empty__text" v-if="lines.length == 0">
      Nenhum registro encontrado.
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./TableUI.scss";
</style>
