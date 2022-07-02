import type { SelectUIOption } from "@/components/ui/select/SelectUI.types";

export interface RecordForm {
  name: string;
  category: SelectUIOption | null;
  date: string;
  whenFinished: string;
  minutes: number;
  seconds: number;
  tags: SelectUIOption[];
}

export interface RecordFormOptions {
  categories: SelectUIOption[];
  tags: SelectUIOption[];
}
