import React, { FunctionComponent, ReactElement } from 'react';
import styled, {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
  StyledComponent,
} from 'styled-components';
import { Keypad } from './components/keypad/keypad';
import { FELT_GREEN } from './constants/colors';

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    }
`;

const landscapeSpaing: number = 1;
const Felt: StyledComponent<'div', {}> = styled.div`
  background-color: ${FELT_GREEN};
  box-shadow: inset 0 0 10rem black;
  display: grid;
  grid-template: 1fr auto / 1fr;
  min-height: 100vh;

  @media screen and (orientation: landscape) {
    grid-gap: ${landscapeSpaing}rem;
    grid-template: 1fr / 2fr 1fr;
    min-height: calc(100vh - ${landscapeSpaing + landscapeSpaing}rem);
    padding: ${landscapeSpaing}rem;
  }
`;

export const App: FunctionComponent = (): ReactElement => (
  <>
    <GlobalStyle />
    <Felt>
      <Keypad />
    </Felt>
  </>
);
