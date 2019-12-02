export interface Props {
  canRedo: boolean;
  canReset: boolean;
  canUndo: boolean;
  redo: () => void;
  reset: () => void;
  undo: () => void;
}
