export interface Props {
  canRedo: boolean;
  canUndo: boolean;
  undoRedo: (step: number) => void;
}
