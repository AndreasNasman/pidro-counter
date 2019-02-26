import React, { FunctionComponent, ReactElement } from 'react';
import { Keypad } from '../keypad';
import { Scoreboard } from '../scoreboard';
import { Felt, GlobalStyle } from './styles';

export const App: FunctionComponent = (): ReactElement => (
  <>
    <GlobalStyle />
    <Felt>
      <Scoreboard />
      <Keypad />
    </Felt>
  </>
);
