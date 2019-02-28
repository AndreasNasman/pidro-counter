import React, { FunctionComponent, ReactElement, useState } from 'react';
import { MAXIMUM_POINTS } from '../../constants/game';
import { Keypad } from '../keypad';
import { Scoreboard } from '../scoreboard';
import { Felt, GlobalStyle } from './styles';
import { IResult, ISet, Phases, Team } from './types';

export const App: FunctionComponent = (): ReactElement => {
  const [teams] = useState<Team[]>(['vi', 'de']);
  const [game, setGame] = useState<ISet[]>([{ round: 1 }]);
  const currentSet: ISet = game[game.length - 1];
  const [phase, setPhase] = useState(Phases.Bidding);

  const updateBid: (bid: IResult) => void = (bid: IResult): void => {
    setGame([...game.slice(0, -1), { ...currentSet, bid }]);
    setPhase(Phases.Score);
  };

  const updateScore: (highestScore: IResult) => void = (
    highestScore: IResult,
  ): void => {
    const { bid } = currentSet;
    if (!bid) return;
    const { points: biddingPoints, team: biddingTeam } = bid;

    const score: { [K in Team]: number } = teams.reduce(
      (result: { [K in Team]: number }, team: Team) => {
        result[team] =
          team === highestScore.team
            ? highestScore.points
            : MAXIMUM_POINTS - highestScore.points;

        if (team === biddingTeam && result[team] < biddingPoints) {
          result[team] = -biddingPoints;
        }

        return result;
      },
      {} as { [K in Team]: number }, // tslint:disable-line: no-object-literal-type-assertion
    );

    setGame([
      ...game.slice(0, -1),
      { ...currentSet, score },
      { round: currentSet.round + 1 },
    ]);
    setPhase(Phases.Bidding);
  };

  const updateSet: (result: IResult) => void =
    phase === Phases.Bidding ? updateBid : updateScore;

  return (
    <>
      <GlobalStyle />
      <Felt>
        <Scoreboard teams={teams} />
        <Keypad phase={phase} teams={teams} updateSet={updateSet} />
      </Felt>
    </>
  );
};
