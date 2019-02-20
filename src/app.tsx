import React, { FunctionComponent, ReactElement } from 'react';
import styled, { StyledComponent } from 'styled-components';

const Button: StyledComponent<'button', {}> = styled.button`
  background-color: red;
  color: white;
`;

export const App: FunctionComponent = (): ReactElement => (
  <>
    <div>Hello World!</div>
    <Button>Click me!</Button>
  </>
);
