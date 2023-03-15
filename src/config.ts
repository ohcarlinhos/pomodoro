import type { TheLinkProps } from "@/components/ui/TheLink";
import { menu, general, developer } from "./config.json";

export interface NavLink extends TheLinkProps {
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
