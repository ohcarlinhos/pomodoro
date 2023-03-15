import type {
  TheTableColumn,
  TheTableLine,
  TheTableAction,
} from "../TheTable.types";

export const tableLines = (
  text = "Coluna",
  linesNum = 5,
  linesColumn = 5
): TheTableLine[] => {
  const lines: TheTableLine[] = [];

  for (let l = 1; l <= linesNum; l++) {
    const line: TheTableLine = { id: l, label: `${text} ${l}`, columns: [] };

    for (let c = 1; c <= linesColumn; c++) {
      const column = { label: `${text} ${c}` };
      if (c == 1) column.label = "Linha " + l;
      line.columns.push(column);
    }

    lines.push(line);
  }

  return lines;
};

export const tableColumns = (text = "Coluna", num = 5): TheTableColumn[] => {
  const columns: TheTableColumn[] = [];

  for (let c = 1; c <= num; c++) {
    const column: TheTableColumn = { label: `${text} ${c}` };
    if (c == 1) {
      column.width = "250px";
      column.sort = true;
      column.order = "desc";
    }
    columns.push(column);
  }

  return columns;
};

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
