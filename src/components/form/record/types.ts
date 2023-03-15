import type { TheSelectOption } from "@/components/ui/TheSelect/TheSelect.types";

export interface RecordForm {
  name: string;
  category: TheSelectOption | null;
  date: string;
  whenFinished: string;
  minutes: number;
  seconds: number;
  tags: TheSelectOption[];
}

export interface RecordFormOptions {
  categories: TheSelectOption[];
  tags: TheSelectOption[];
}
