import last from 'lodash.last';
import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { MAXIMUM_POINTS } from '../../constants/game';
import { Keypad } from '../keypad';
import { Scoreboard } from '../scoreboard';
import { Toolbar } from '../toolbar';
import { Felt, GlobalStyle, Grid } from './styles';
import { Game, IResult, ISet, Phases, Score, Team } from './types';

export const App: FunctionComponent = (): ReactElement => {
  const [teams] = useState<Team[]>(['vi', 'de']);
  const [game, setGame] = useState<Game>(() => {
    const storedGame: string | null = sessionStorage.getItem('game');
    if (storedGame !== null) {
      return JSON.parse(storedGame) as Game;
    }

    return [];
  });
  const currentSet: ISet | undefined = last(game);
  const [phase, setPhase] = useState(() => {
    if (!currentSet || currentSet.score) {
      return Phases.Bidding;
    }

    return Phases.Score;
  });

  useEffect(() => {
    sessionStorage.setItem('game', JSON.stringify(game));
  }, [game]);

  const updateBid: (bid: IResult) => void = (bid: IResult): void => {
    const nextRound: number = currentSet ? currentSet.round + 1 : 1;
    setGame([...game, { bid, round: nextRound }]);
    setPhase(Phases.Score);
  };

  const updateScore: (winner: IResult) => void = (winner: IResult): void => {
    if (!currentSet) return;
    const { bid } = currentSet;
    const { points: biddingPoints, team: biddingTeam } = bid;

    const score: Score = teams.reduce(
      (result: Score, team: Team) => {
        result[team] =
          team === winner.team ? winner.points : MAXIMUM_POINTS - winner.points;

        if (team === biddingTeam && result[team] < biddingPoints) {
          result[team] = -biddingPoints;
        }

        return result;
      },
      {} as Score, // tslint:disable-line: no-object-literal-type-assertion
    );

    setGame([...game.slice(0, -1), { ...currentSet, score }]);
    setPhase(Phases.Bidding);
  };

  const updateSet: (result: IResult) => void =
    phase === Phases.Bidding ? updateBid : updateScore;

  const undo: () => void = (): void => {
    if (!currentSet) return;

    if (phase === Phases.Score) {
      setGame([...game.slice(0, -1)]);
      setPhase(Phases.Bidding);
    } else if (phase === Phases.Bidding) {
      setGame([...game.slice(0, -1), { ...currentSet, score: undefined }]);
      setPhase(Phases.Score);
    }
  };

  const resetScore: () => void = (): void => {
    setGame([]);
  };

  return (
    <>
      <GlobalStyle />
      <Felt>
        <Grid>
          <Scoreboard game={game} teams={teams} />
          <Toolbar resetScore={resetScore} undo={undo} />
          <Keypad phase={phase} teams={teams} updateSet={updateSet} />
        </Grid>
      </Felt>
    </>
  );
};
