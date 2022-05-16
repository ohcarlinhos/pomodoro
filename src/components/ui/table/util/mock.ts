import type {
  TableUIColumn,
  TableUILine,
  TableUIActions,
} from "../TableUI.types";

export const tableLines = (text = "Linha", num = 5): TableUILine[] => {
  const lines: TableUILine[] = [];

  for (let l = 1; l <= num; l++) {
    const line: TableUILine = { id: l, label: `${text} ${l}`, columns: [] };

    for (let c = 1; c <= num; c++) {
      line.columns.push({ label: `${text} ${c}` });
    }

    lines.push(line);
  }

  return lines;
};

export const tableColumns = (text = "Coluna", num = 5): TableUIColumn[] => {
  const columns: TableUIColumn[] = [];

  for (let c = 1; c <= num; c++) {
    const column: TableUIColumn = { label: `${text} ${c}` };
    if (c == 1) column.minWidth = "200px";
    columns.push(column);
  }

  return columns;
};

export const tableActions = (): TableUIActions[] => [
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
