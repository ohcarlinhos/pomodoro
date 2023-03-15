export interface TheTableColumn {
  label: string;
  minWidth?: string;
  width?: string;
  sort?: boolean;
  order?: string;
}

export interface TheTableLine {
  id: string | number;
  label: string;
  columns: TheTableColumn[];
}

export interface TheTableAction {
  id: number;
  label: string;
  action: string;
  icon?: string;
  color?: string;
  disabled?: boolean;
}

export interface TheTableOrderPayload {
  order: string;
  column: TheTableColumn;
}

export interface TheTableActionPayload {
  action: string;
  line: TheTableLine;
}
