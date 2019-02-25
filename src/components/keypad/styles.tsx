import styled, { StyledComponent, ThemedStyledProps } from 'styled-components';
import { PLAYING_CARD_RED } from '../../constants/colors';

export const Button: StyledComponent<'button', {}> = styled.button`
  background-color: transparent;
  border: 0.25rem solid white;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem;
  text-transform: uppercase;

  &:focus {
    background-color: white;
    color: ${(props: ThemedStyledProps<{}, { color: string }>): string =>
      props.theme.color};
    outline: none;
  }
`;
Button.defaultProps = { theme: { color: PLAYING_CARD_RED } };

export const Container: StyledComponent<'div', {}> = styled.div`
  align-content: center;
  display: grid;
  grid-auto-rows: min-content;

  @media screen and (orientation: landscape) {
    margin-left: 1rem;
  }
`;

export const H1: StyledComponent<'h1', {}> = styled.h1`
  color: white;
  text-align: center;

  @media screen and (orientation: landscape) {
    margin-top: 0.1rem;
  }
`;

export const PointWrapper: StyledComponent<'div', {}> = styled.div`
  display: grid;
  grid-gap: 0.1rem;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.1rem;
`;

export const TeamWrapper: StyledComponent<'div', {}> = styled.div`
  display: grid;
  grid-gap: 0.1rem;
  grid-template-columns: 1fr 1fr;
`;
