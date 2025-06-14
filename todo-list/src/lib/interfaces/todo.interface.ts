export interface Todo {
  placeholder: string;
  type: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TodoData {
  id: number;
  title: string;
  date: string;
  description: string;
  status: string;
}
