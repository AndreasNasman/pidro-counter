export interface Props<T> {
  active: boolean;
  activeColor: string;
  disabled: boolean;
  handleClick: (value: T) => void;
  text: string;
  value: T;
}
