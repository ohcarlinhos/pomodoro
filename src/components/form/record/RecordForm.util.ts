import type { SelectUIOption } from "@/components/ui/select/SelectUI.types";

export const categoriesOptions = (): SelectUIOption[] => [
  {
    label: "Estudo",
    value: "study",
  },
  {
    label: "Trabalho",
    value: "work",
  },
  {
    label: "Hobby",
    value: "hobby",
  },
  {
    label: "Serviços Domésticos",
    value: "domestic_services",
  },
  {
    label: "Outro",
    value: "other",
  },
];

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
