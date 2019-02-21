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

const Grid: StyledComponent<'div', {}> = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
`;

export const App: FunctionComponent = (): ReactElement => (
  <>
    <GlobalStyle />
    <Grid>
      <div>Hello World!</div>
      <Keypad />
    </Grid>
  </>
);
