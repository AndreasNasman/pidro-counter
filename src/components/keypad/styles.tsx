import styled, { StyledComponent } from 'styled-components';

export const Button: StyledComponent<'button', {}> = styled.button`
  background-color: transparent;
  border: 5px solid white;
  border-radius: 10px;
  color: white;
  font: normal 2rem 'Roboto', sans-serif;
  padding: 0.5rem;

  &:focus {
    background-color: white;
    color: red;
    font-weight: bold;
    outline: none;
  }
`;

export const PointGrid: StyledComponent<'div', {}> = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1px;
`;
