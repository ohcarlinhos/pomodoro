import { categoriesAPI } from "@/services";
import type { CategoriesStore } from "@/stores";
import { defineStore } from "pinia";

export const useCategoriesStore = defineStore({
  id: "categories",
  state: () => ({
    categories: [] as CategoriesStore[],
  }),

  getters: {
    getCategories: (state) => state.categories,
  },

  actions: {
    async requestCategories() {
      if (!this.categories.length) {
        this.categories = [...(await categoriesAPI.get())];
      }
    },
  },
});
