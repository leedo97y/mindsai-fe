export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type TEditMode = {
  id: number;
  status: "save" | "edit";
};
