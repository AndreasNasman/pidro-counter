import { Game, Team } from '../app/types';

export interface IProps {
  game: Game;
  teams: Team[];
}

export interface ITable {
  scoreboardMinHeight: string;
}
