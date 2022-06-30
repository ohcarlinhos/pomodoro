import type { SelectUIOption } from "@/components/ui/select/SelectUI.types";
import type { CategoryAPI } from "@/services/types";

export const categoriesSelectAdapter = (
  categories: CategoryAPI[]
): SelectUIOption[] => {
  return categories.map<SelectUIOption>((category) => {
    return {
      label: category.name,
      value: category.uuid,
    };
  });
};

export const tagsOptions = (): SelectUIOption[] => [
  {
    label: "vue.js",
    value: "vue.js",
  },
  {
    label: "react.js",
    value: "react.js",
  },
  {
    label: "node.js",
    value: "node.js",
  },
  {
    label: "faculdade",
    value: "faculdade",
  },
];
