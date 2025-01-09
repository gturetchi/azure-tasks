export type WorkItemResponse = {
  queryType: string;
  asOf: string;
  columns: Column[];
  sortColumns: SortColumn[];
  workItems: WorkItem[];
};

export type Column = {
  referenceName: string;
  name: string;
  url: string;
};

export type SortColumn = {
  field: Column;
  descending: boolean;
};

export type WorkItem = {
  id: number;
  url: string;
};
