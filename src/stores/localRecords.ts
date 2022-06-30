import { v4 as uuidv4 } from "uuid";

import type { LocalRecordsStore } from "@/stores";
import { defineStore } from "pinia";
import { storageService } from "@/services";

export const useLocalRecordsStore = defineStore({
  id: "localRecords",
  state: () => ({
    records: [] as LocalRecordsStore[],
  }),

  getters: {
    getRecords: (state) => state.records,
  },

  actions: {
    updateLocalStorage() {
      storageService.save("localRecords", JSON.stringify(this.records));
    },

    requestRecords() {
      const localRecords = storageService.load("localRecords");
      if (localRecords) {
        const records = JSON.parse(localRecords);
        if (records) this.records = records as LocalRecordsStore[];
      }
    },

    addRecord(day: string, whenFinished: string, registerTime: number) {
      this.$state.records.unshift({
        uuid: uuidv4(),
        day,
        whenFinished,
        registerTime,
      });
      this.updateLocalStorage();
    },

    deleteRecord(uuid: string) {
      const index = this.records.findIndex((record) => record.uuid == uuid);
      if (index != -1) this.records.splice(index, 1);
      this.updateLocalStorage();
    },

    clear() {
      this.records = [];
      this.updateLocalStorage();
    },
  },
});
