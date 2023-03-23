import type { TheLinkProps } from "@/components/ui/TheLink";
import { developer, links, footer } from "./config.json";

export interface NavLink extends TheLinkProps {
  session?: boolean;
  hideOnSession?: boolean;
}

export const appConfig = {
  menu: {
    logo: {
      title: "menu.logo.title",
      alt: "menu.logo.alt",
      uppercase: false,
      url: "home",
    },
    links: [...links] as NavLink[],
    user: {
      ...developer,
    },
  },
  footer,
};
