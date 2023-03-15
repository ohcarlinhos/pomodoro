import type { TheSelectOption } from "@/components/ui/TheSelect/TheSelect.types";
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
): TheSelectOption[] => {
  return categories.map<TheSelectOption>((category) => {
    return {
      label: category.name,
      value: category.uuid,
    };
  });
};

export const tagsOptions = (): TheSelectOption[] => [
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

export const selectOptionsToString = (list: TheSelectOption[]) => {
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
    .map((t) => ({ label: t, value: t })) || []) as TheSelectOption[];
};
