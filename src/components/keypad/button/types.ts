import { Team } from "components/common/types";

type Value = Team | number;

export interface Props {
  active: boolean;
  activeColor: string;
  disabled: boolean;
  handleClick: (value: Value) => void;
  value: Value;
}
