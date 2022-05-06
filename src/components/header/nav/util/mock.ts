import type { LinkProps } from "../../link/Link.vue";

export const navLinks = (text = "Link", num = 5, a = false): LinkProps[] => {
  const columns: LinkProps[] = [];

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
