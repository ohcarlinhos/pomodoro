import type { LinkProps } from "@/components/header/link/TheLink.vue";
import { menu, general, developer } from "./config.json";

export interface NavLink extends LinkProps {
  session?: boolean;
  hideOnSession?: boolean;
}

export const appConfig = {
  general: {
    ...general,
  },
  menu: {
    logo: {
      ...menu.logo,
    },
    links: [...menu.links] as NavLink[],
    user: {
      ...developer,
    },
  },
};
