import { IBid, Team } from '../app/types';

export interface IProps {
  bid?: IBid;
  teams: Team[];
}

export interface IButton {
  active: boolean;
  activeColor: string;
}
