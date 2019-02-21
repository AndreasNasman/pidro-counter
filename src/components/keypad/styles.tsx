import styled, { StyledComponent } from 'styled-components';

const borderWidth: string = '1rem';

export const Button: StyledComponent<'button', {}> = styled.button`
  background-color: whitesmoke;
  border-bottom: ${borderWidth} solid hsl(0, 0%, 80%);
  border-left: ${borderWidth} solid hsl(0, 0%, 88%);
  border-right: ${borderWidth} solid hsl(0, 0%, 88%);
  border-top: ${borderWidth} solid hsl(0, 0%, 84%);
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: 300;
  padding: 0.75rem;
`;

export const Grid: StyledComponent<'div', {}> = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: 1fr 1fr 1fr;
`;
