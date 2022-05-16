export interface TableUIColumn {
  label: string;
  minWidth?: string;
}

export interface TableUILine {
  id: string | number;
  label: string;
  columns: TableUIColumn[];
}

export interface TableUIActions {
  id: number;
  label: string;
  action: string;
  icon?: string;
  color?: string;
  disabled?: boolean;
}
