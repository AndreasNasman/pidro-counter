export interface IProps {
  canRedo: boolean;
  canUndo: boolean;
  redo(): void;
  resetScore(): void;
  undo(): void;
}

export interface IAnswer {
  color: string;
}

export interface IIconWrapper {
  disabled: boolean;
}
