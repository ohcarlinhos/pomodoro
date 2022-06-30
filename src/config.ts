import logoImage from "@/assets/img/logo.svg";
import type { LinkProps } from "./components/header/link/TheLink.vue.__VLS_script";

export interface NavLink extends LinkProps {
  session?: boolean;
  hideOnSession?: boolean;
}

export const pageConfig = {
  menu: {
    logo: {
      title: "My Timeer - Save your time!",
      logoImage,
      uppercase: false,
      url: "home",
    },
    userImage:
      "https://gravatar.com/avatar/9a82ba52769cbc22951a7cf516124307?s=250",
    userName: "Carlos Roberto (@caarlos1)",
    userClickable: true,
    links: [
      { id: 1, label: "Timer", url: "home" },
      { id: 2, label: "Painel", url: "panel", session: true },
      { id: 3, label: "Acessar", url: "login", hideOnSession: true },
      { id: 3, label: "Sair", url: "exit", session: true },
    ] as NavLink[],
  },
  devUrlProfile: "https://github.com/caarlos1",
};
