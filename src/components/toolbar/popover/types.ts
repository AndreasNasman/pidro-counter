export interface Props {
  affirmative: () => void;
  children: JSX.Element;
  close: () => void;
  isOpen: boolean;
}
