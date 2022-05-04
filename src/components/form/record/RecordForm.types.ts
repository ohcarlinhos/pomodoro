import type { SelectUIOption } from "@/components/ui/select/SelectUI.types";

export interface RecordForm {
  name: string;
  category: string;
  day: string;
  whenFinished: string;
  registerTime: number;
  tags: string;
}

export interface RecordFormOptions {
  categories: SelectUIOption[];
  tags: SelectUIOption[];
}
