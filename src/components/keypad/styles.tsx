import styled, { StyledComponent, ThemedStyledProps } from 'styled-components';
import { LANDSCAPE } from '../../constants/breakpoints';
import { PLAYING_CARD_RED } from '../../constants/colors';

export const Button: StyledComponent<'button', {}> = styled.button`
  background-color: transparent;
  border: 5px solid white;
  border-radius: 10px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${LANDSCAPE}) {
    max-width: 20em;
  }
`;

export const H1: StyledComponent<'h1', {}> = styled.h1`
  color: white;
  margin-top: 0.1rem;
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
