import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/timer"),
    },
    {
      path: "/panel",
      name: "panel",
      component: () => import("../pages/panel"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../pages/auth"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "home" },
    },
  ],
});

export default router;
