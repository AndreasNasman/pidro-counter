import { Dispatch, SetStateAction } from 'react';
import { Game, Team } from '../app/types';

export interface IProps {
  game: Game;
  setScoreboardMinHeight: Dispatch<SetStateAction<string>>;
  teams: Team[];
}
