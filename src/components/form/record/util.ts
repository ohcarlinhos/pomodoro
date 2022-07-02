import type { SelectUIOption } from "@/components/ui/select/SelectUI.types";
import type { CategoryAPI } from "@/services/types";
import { zeroLeft } from "@/util/functions";
import type { RecordForm } from "./types";

export const recordFormDefault = (): RecordForm => ({
  name: "",
  category: null,
  date: "",
  whenFinished: "",
  minutes: 0,
  seconds: 0,
  tags: [],
});

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

export const selectOptionsToString = (list: SelectUIOption[]) => {
  let string = "";

  list.forEach((item, index) => {
    string += item.value + (index + 1 != list.length ? "," : "");
  });

  return string;
};

export const formatDate = () => {
  const date = new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toJSON().slice(0, 10);
};

export const formatWhenFinished = () => {
  const time = new Date();
  return `${zeroLeft(time.getHours())}:${zeroLeft(time.getMinutes())}`;
};

export const makeTagByString = (tagsQuery: string) => {
  return (tagsQuery
    .split(",")
    .map((t) => t.trim())
    .filter((t) => t)
    .map((t) => ({ label: t, value: t })) || []) as SelectUIOption[];
};
