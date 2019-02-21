import React, { FunctionComponent, ReactElement } from 'react';
import styled, {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
  StyledComponent,
} from 'styled-components';
import { Keypad } from './components/keypad/keypad';

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
    }
`;

const Felt: StyledComponent<'div', {}> = styled.div`
  background-color: #006e3b;
  box-shadow: inset 0 0 10rem black;
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
`;

export const App: FunctionComponent = (): ReactElement => (
  <>
    <GlobalStyle />
    <Felt>
      <div>Hello World!</div>
      <Keypad />
    </Felt>
  </>
);
