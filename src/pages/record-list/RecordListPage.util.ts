import type {
  TableUIColumn,
  TableUILine,
} from "@/components/ui/table/TableUI.types";
import type { RecordDataAPI } from "@/services/types";

export const tableColumns = (): TableUIColumn[] => [
  { label: "Coluna 1" },
  { label: "Coluna 2" },
  { label: "Coluna 3" },
  { label: "Coluna 4" },
  { label: "Coluna 5" },
];

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

export const makeColumnsByRecords = (records: RecordDataAPI[]) => {
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
