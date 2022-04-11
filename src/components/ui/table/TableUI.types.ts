export interface TableUIColumn {
  label: string;
}

export interface TableUILine {
  id: string | number;
  label: string;
  columns: TableUIColumn[];
}
