import React, { FunctionComponent, ReactElement } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Keypad } from './components/keypad/keypad';
import { LANDSCAPE } from './constants/breakpoints';
import { FELT_GREEN } from './constants/colors';

const Felt: StyledComponent<'div', {}> = styled.div`
  background-color: ${FELT_GREEN};
  box-shadow: inset 0 0 10rem black;
  display: grid;
  grid-template: 1fr auto / 1fr;
  min-height: 100vh;

  @media (min-width: ${LANDSCAPE}) {
    grid-template: 1fr / 2fr 1fr;
  }
`;

export const App: FunctionComponent = (): ReactElement => (
  <Felt>
    <div />
    <Keypad />
  </Felt>
);
