import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Keypad } from '../keypad';
import { Scoreboard } from '../scoreboard';
import { Felt, GlobalStyle } from './styles';

export const App: FunctionComponent = (): ReactElement => {
  const [teams] = useState(['vi', 'de']);

  return (
    <>
      <GlobalStyle />
      <Felt>
        <Scoreboard teams={teams} />
        <Keypad teams={teams} />
      </Felt>
    </>
  );
};
