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

  &:focus {
    outline: none;
  }
`;

export const Container: StyledComponent<'div', {}> = styled.div`
  align-content: safe center;
  display: grid;
  overflow: auto;
`;

export const DigitWrapper: StyledComponent<'div', {}> = styled.div`
  display: grid;
  grid-gap: ${BUTTON_GAP}rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const H2: StyledComponent<'h2', {}> = styled.h2`
  color: ${PLAYING_CARD_WHITE};
  margin-top: 0;
  text-align: center;
`;

export const TeamWrapper: StyledComponent<'div', {}> = styled.div`
  display: grid;
  grid-gap: ${BUTTON_GAP}rem;
  grid-template-columns: 1fr 1fr;
  margin-bottom: ${BUTTON_GAP}rem;
`;
