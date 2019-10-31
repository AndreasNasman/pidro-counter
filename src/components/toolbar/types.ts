export interface Props {
  canRedo: boolean;
  canUndo: boolean;
  redo: () => void;
  undo: () => void;
}
