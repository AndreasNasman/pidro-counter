import styled, { StyledComponent, ThemedStyledProps } from 'styled-components';
import { PLAYING_CARD_RED } from '../../constants/colors';

const buttonGap: number = 0.1;

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
  align-content: safe center;
  display: grid;
  overflow: auto;
`;

export const H1: StyledComponent<'h1', {}> = styled.h1`
  color: white;
  text-align: center;

  @media screen and (orientation: landscape) {
    margin-top: 0;
  }
`;

export const PointWrapper: StyledComponent<'div', {}> = styled.div`
  display: grid;
  grid-gap: ${buttonGap}rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const TeamWrapper: StyledComponent<'div', {}> = styled.div`
  display: grid;
  grid-gap: ${buttonGap}rem;
  grid-template-columns: 1fr 1fr;
  margin-bottom: ${buttonGap}rem;
`;
