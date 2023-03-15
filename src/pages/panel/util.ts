import type {
  TheTableLine,
  TheTableAction,
  TheTableColumn,
} from "@/components/ui/TheTable/TheTable.types";
import type { RecordDataAPI } from "@/services/types";
import { secondsToString } from "@/util/functions";

export const tableLines = (): TheTableLine[] => {
  const lines: TheTableLine[] = [];

  for (let l = 0; l < 5; l++) {
    const line: TheTableLine = { id: l, label: `Linha ${l}`, columns: [] };

    for (let c = 0; c < 5; c++) {
      line.columns.push({ label: `Linha ${c}` });
    }

    lines.push(line);
  }

  return lines;
};

export const makeTableLinesByRecords = (records: RecordDataAPI[]) => {
  return records.map((record) => {
    const line: TheTableLine = { id: "", label: "", columns: [] };

    line.id = record.uuid;
    line.label = record.name;
    const labels: string[] = [
      record.name,
      record.category.name,
      "-",
      record.date,
      record.whenFinished ?? "-",
      secondsToString(record.seconds),
    ];

    line.columns = labels.map((l) => ({ label: l }));
    return line;
  });
};

export const tableColumns = (): TheTableColumn[] => [
  { label: "Nome", width: "33%" },
  { label: "Categoria" },
  { label: "Tags" },
  { label: "Data", width: "20%" },
  { label: "Finalizado às" },
  { label: "Tempo" },
];

export const tableActions = (): TheTableAction[] => [
  {
    id: 1,
    label: "Editar",
    disabled: false,
    action: "edit",
    icon: "edit",
  },
  {
    id: 2,
    label: "Excluir",
    disabled: false,
    action: "delete",
    icon: "delete",
  },
];
