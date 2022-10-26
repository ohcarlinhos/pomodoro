import { v4 as uuidv4 } from "uuid";

import type { LocalRecordsStore } from "@/stores";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useLocalRecordsStore = defineStore({
  id: "localRecords",
  state: () => ({
    records: useStorage("local-records", [] as LocalRecordsStore[]),
  }),

  getters: {
    getRecords: (state) => state.records,
  },

  actions: {
    addRecord(day: string, whenFinished: string, registerTime: number) {
      this.$state.records.unshift({
        uuid: uuidv4(),
        day,
        whenFinished,
        registerTime,
      });
    },

    deleteRecord(uuid: string) {
      const index = this.records.findIndex((record) => record.uuid == uuid);
      if (index != -1) this.records.splice(index, 1);
    },

    clear() {
      this.records = [];
    },
  },
});
