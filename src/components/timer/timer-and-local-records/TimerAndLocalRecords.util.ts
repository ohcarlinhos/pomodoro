import type {
  TableUILine,
  TableUIAction,
  TableUIColumn,
} from "@/components/ui/table/TableUI.types";
import type { LocalRecordsStore } from "@/stores";
import { secondsToString } from "@/util/functions";

export const makeTableLinesByLocalRecords = (records: LocalRecordsStore[]) => {
  return records.map((record) => {
    const line: TableUILine = { id: "", label: "", columns: [] };

    line.id = record.uuid;
    line.label = "";

    const labels: string[] = [
      record.day,
      record.whenFinished ?? "-",
      secondsToString(record.registerTime),
    ];

    line.columns = labels.map((l) => ({ label: l }));
    return line;
  });
};

export const tableColumns = (): TableUIColumn[] => [
  { label: "Data" },
  { label: "Finalizado às" },
  { label: "Tempo" },
];

export const tableActions = (): TableUIAction[] => [
  {
    id: 2,
    label: "Excluir",
    disabled: false,
    action: "delete",
    icon: "delete",
  },
];
