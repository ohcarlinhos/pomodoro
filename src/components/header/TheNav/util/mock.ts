import type { TheLinkProps } from "@/components/ui/TheLink";

export const navLinks = (text = "Link", num = 5, a = false): TheLinkProps[] => {
  const columns: TheLinkProps[] = [];

  for (let c = 1; c <= num; c++) {
    columns.push({
      id: c,
      label: `${text} ${c}`,
      url: `${text.toLowerCase()}-${c}`,
      a,
    });
  }

  return columns;
};
