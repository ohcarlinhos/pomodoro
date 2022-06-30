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
      path: "/exit",
      name: "exit",
      component: () => import("../pages/exit"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "home" },
    },
  ],
});

export default router;
