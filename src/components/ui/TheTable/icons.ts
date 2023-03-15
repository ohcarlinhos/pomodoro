import { defineAsyncComponent } from "vue";

export const iconList = [
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

  {
    name: "asc",
    component: defineAsyncComponent({
      loader: () => import("../../icons/AscIcon.vue"),
    }),
  },
  {
    name: "desc",
    component: defineAsyncComponent({
      loader: () => import("../../icons/DescIcon.vue"),
    }),
  },
];
