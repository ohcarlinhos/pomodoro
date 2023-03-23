import {
  createRouter,
  createWebHistory,
  type NavigationGuard,
} from "vue-router";

import { USE_PANEL } from "@/env";

const beforeAuth: NavigationGuard = () => {
  if (!USE_PANEL) router.push({ name: "home" });
};

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
      beforeEnter: beforeAuth,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../pages/auth"),
      beforeEnter: beforeAuth,
    },
    {
      path: "/exit",
      name: "exit",
      component: () => import("../pages/exit"),
      beforeEnter: beforeAuth,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "home" },
    },
  ],
});

export default router;
