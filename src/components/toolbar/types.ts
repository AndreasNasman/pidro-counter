export interface IProps {
  redo(): void;
  resetScore(): void;
  undo(): void;
}

export interface IAnswer {
  color: string;
}
