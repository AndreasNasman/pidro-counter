import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { MAXIMUM_POINTS } from '../../constants/game';
import { Keypad } from '../keypad';
import { Scoreboard } from '../scoreboard';
import { Felt, GlobalStyle } from './styles';
import { Game, IResult, ISet, Phases, Score, Team } from './types';

export const App: FunctionComponent = (): ReactElement => {
  const [teams] = useState<Team[]>(['vi', 'de']);
  const [game, setGame] = useState<Game>(() => {
    const storedGame: string | null = sessionStorage.getItem('game');
    if (storedGame === null) {
      return [{ phase: Phases.Bidding, round: 1 }];
    }

    return JSON.parse(storedGame) as Game;
  });
  const currentSet: ISet = game[game.length - 1];
  const [scoreboardMinHeight, setScoreboardMinHeight] = useState('0');
  const [keypadMinHeight, setKeypadMinHeight] = useState('0');

  useEffect(() => {
    sessionStorage.setItem('game', JSON.stringify(game));
  }, [game]);

  const updateBid: (bid: IResult) => void = (bid: IResult): void => {
    setGame([
      ...game.slice(0, -1),
      { ...currentSet, bid, phase: Phases.Score },
    ]);
  };

  const updateScore: (winner: IResult) => void = (winner: IResult): void => {
    const { bid } = currentSet;
    if (!bid) return;
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

    setGame([
      ...game.slice(0, -1),
      { ...currentSet, score },
      { phase: Phases.Bidding, round: currentSet.round + 1 },
    ]);
  };

  const updateSet: (result: IResult) => void =
    currentSet.phase === Phases.Bidding ? updateBid : updateScore;

  return (
    <>
      <GlobalStyle />
      <Felt
        keypadMinHeight={keypadMinHeight}
        scoreboardMinHeight={scoreboardMinHeight}
      >
        <Scoreboard
          game={game}
          setScoreboardMinHeight={setScoreboardMinHeight}
          teams={teams}
        />
        <Keypad
          phase={currentSet.phase}
          setKeypadMinHeight={setKeypadMinHeight}
          teams={teams}
          updateSet={updateSet}
        />
      </Felt>
    </>
  );
};
