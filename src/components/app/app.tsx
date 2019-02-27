import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Keypad } from '../keypad';
import { Scoreboard } from '../scoreboard';
import { Felt, GlobalStyle } from './styles';
import { ISet, Team } from './types';

export const App: FunctionComponent = (): ReactElement => {
  const [teams] = useState<Team[]>(['vi', 'de']);
  const [game] = useState<ISet[]>([{ round: 1 }]);

  const currentSet: ISet = game[game.length - 1];

  return (
    <>
      <GlobalStyle />
      <Felt>
        <Scoreboard teams={teams} />
        <Keypad bid={currentSet.bid} teams={teams} />
      </Felt>
    </>
  );
};
