import { Dispatch, SetStateAction } from 'react';
import { IResult, Phases, Team } from '../app/types';

export interface IProps {
  phase: Phases;
  setKeypadMinHeight: Dispatch<SetStateAction<string>>;
  teams: Team[];
  updateSet(result: IResult): void;
}

export interface IButton {
  active: boolean;
  activeColor: string;
}
