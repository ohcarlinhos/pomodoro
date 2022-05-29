import type {
  TableUILine,
  TableUIAction,
  TableUIColumn,
} from "@/components/ui/table/TableUI.types";
import type { RecordDataAPI } from "@/services/types";

export const tableLines = (): TableUILine[] => {
  const lines: TableUILine[] = [];

  for (let l = 0; l < 5; l++) {
    const line: TableUILine = { id: l, label: `Linha ${l}`, columns: [] };

    for (let c = 0; c < 5; c++) {
      line.columns.push({ label: `Linha ${c}` });
    }

    lines.push(line);
  }

  return lines;
};

export const makeTableLinesByRecords = (records: RecordDataAPI[]) => {
  return records.map((record) => {
    const line: TableUILine = { id: "", label: "", columns: [] };

    line.id = record.uuid;
    line.label = record.name;
    const labels: string[] = [
      record.name,
      record.category,
      "-",
      record.day,
      record.whenFinished ?? "-",
      `${record.registerTime}`,
    ];

    line.columns = labels.map((l) => ({ label: l }));
    return line;
  });
};

export const tableColumns = (): TableUIColumn[] => [
  { label: "Nome", width: "33%" },
  { label: "Categoria" },
  { label: "Tags" },
  { label: "Data" },
  { label: "Finalizado às" },
  { label: "Tempo" },
];

export const tableActions = (): TableUIAction[] => [
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
