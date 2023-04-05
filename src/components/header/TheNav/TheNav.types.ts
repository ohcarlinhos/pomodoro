import { TheLinkProps } from "@/components/ui/TheLink";

export interface NavLink extends TheLinkProps {
  session?: boolean;
  hideOnSession?: boolean;
}
