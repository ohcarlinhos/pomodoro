export interface TableUIColumn {
  label: string;
  minWidth?: string;
  width?: string;
  sort?: boolean;
  order?: string;
}

export interface TableUILine {
  id: string | number;
  label: string;
  columns: TableUIColumn[];
}

export interface TableUIAction {
  id: number;
  label: string;
  action: string;
  icon?: string;
  color?: string;
  disabled?: boolean;
}

export interface TableUIOrderPayload {
  order: string;
  column: TableUIColumn;
}

export interface TableUIActionPayload {
  action: string;
  line: TableUILine;
}
