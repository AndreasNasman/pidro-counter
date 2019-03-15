import styled, { StyledComponent } from 'styled-components';
import { PLAYING_CARD_WHITE } from '../../constants/colors';
import { IButton } from './types';

const BUTTON_GAP: number = 0.1;

export const Button: StyledComponent<'button', {}, IButton> = styled.button`
  background-color: ${(props: IButton): string =>
    props.active ? PLAYING_CARD_WHITE : 'transparent'};
  border: 0.25rem solid ${PLAYING_CARD_WHITE};
  border-radius: 0.5rem;
  color: ${(props: IButton): string =>
    props.active ? props.activeColor : PLAYING_CARD_WHITE};
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }
`;

export const DigitContainer: StyledComponent<'div', {}> = styled.div`
  display: grid;
  grid-gap: ${BUTTON_GAP}rem;
  grid-template-columns: repeat(3, 1fr);
`;

export const H2: StyledComponent<'h2', {}> = styled.h2`
  color: ${PLAYING_CARD_WHITE};
  margin-bottom: 0.5rem;
  margin-top: 0;
  text-align: center;
`;

export const Container: StyledComponent<'div', {}> = styled.div`
  align-content: center;
  display: grid;
  grid-area: keypad;
  min-width: max-content;
`;

export const TeamContainer: StyledComponent<'div', {}> = styled.div`
  column-gap: ${BUTTON_GAP}rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: ${BUTTON_GAP}rem;
`;
