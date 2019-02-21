import styled, { StyledComponent, ThemedStyledProps } from 'styled-components';
import { PLAYING_CARD_RED } from '../../constants/colors';

export const Button: StyledComponent<'button', {}> = styled.button`
  background-color: transparent;
  border: 5px solid white;
  border-radius: 10px;
  color: white;
  font: normal 1.5rem 'Roboto', sans-serif;
  padding: 0.5rem;

  &:focus {
    background-color: white;
    color: ${(props: ThemedStyledProps<{}, { color: string }>): string =>
      props.theme.color};
    font-weight: bold;
    outline: none;
  }
`;
Button.defaultProps = { theme: { color: PLAYING_CARD_RED } };

export const H1: StyledComponent<'h1', {}> = styled.h1`
  color: white;
  text-align: center;
`;

export const PointWrapper: StyledComponent<'div', {}> = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1px;
`;

export const TeamWrapper: StyledComponent<'div', {}> = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: 1fr 1fr;
`;
