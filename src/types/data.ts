export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export enum DisplayOption {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed',
}
