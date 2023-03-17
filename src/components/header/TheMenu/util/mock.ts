import { logo } from "@/components/ui/TheLogo/util/mock";
import { TheMenuProps } from "../TheMenu.vue";

export const menu: TheMenuProps = {
  logo,
  user: {
    image: "https://gravatar.com/avatar/9a82ba52769cbc22951a7cf516124307?s=250",
    name: "Carlos Roberto",
    clickable: true,
  },
  userClickAction: () => alert("Hi!"),
  hasNav: true,
};
