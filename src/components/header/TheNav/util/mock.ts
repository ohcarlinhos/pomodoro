import type { TheLinkProps } from "@/components/ui/TheLink";
import { RouteRecordRaw } from "vue-router";

export const navLinks = (text = "Link", num = 5, a = false): TheLinkProps[] => {
  const columns: TheLinkProps[] = [];

  for (let c = 1; c <= num; c++) {
    columns.push({
      id: c,
      label: `${text} ${c}`,
      url: `link-${c}`,
      a,
    });
  }

  return columns;
};

export const routerLinks = (num = 5) => {
  const links: RouteRecordRaw[] = [];

  for (let n = 1; n <= num; n++) {
    links.push({
      path: `/link-${n}`,
      name: `link-${n}`,
      component: {
        template: `<p class="example__container">Route Example ${n}</p>`,
      },
    });
  }
  return links;
};
