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

const spacing: number = 1;
const Felt: StyledComponent<'div', {}> = styled.div`
  background-color: ${FELT_GREEN};
  box-shadow: inset 0 0 10rem black;
  display: grid;
  grid-template: minmax(0, 1fr) auto / 1fr;
  height: calc(100vh - ${spacing + spacing}rem);
  padding: ${spacing}rem;

  @media screen and (orientation: landscape) {
    grid-gap: ${spacing}rem;
    grid-template: 1fr / minmax(min-content, 2fr) minmax(min-content, 1fr);
    overflow: auto;
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
