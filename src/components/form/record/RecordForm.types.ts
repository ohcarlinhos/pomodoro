import type { SelectUIOption } from "@/components/ui/select/SelectUI.types";

export interface RecordForm {
  name: string;
  category: string;
  date: string;
  whenFinished: string;
  seconds: number;
  tags: string;
}

export interface RecordFormOptions {
  categories: SelectUIOption[];
  tags: SelectUIOption[];
}
