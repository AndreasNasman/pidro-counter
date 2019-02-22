import React, { FunctionComponent, ReactElement } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Keypad } from './components/keypad/keypad';
import { FELT_GREEN } from './constants/colors';

const Felt: StyledComponent<'div', {}> = styled.div`
  background-color: ${FELT_GREEN};
  box-shadow: inset 0 0 10rem black;
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
  overflow: auto;
  position: fixed;
  width: 100%;
`;

export const App: FunctionComponent = (): ReactElement => (
  <Felt>
    <div />
    <Keypad />
  </Felt>
);
