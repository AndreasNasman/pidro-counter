import styled, { StyledComponent } from 'styled-components';
import { CHALK_WHITE, PLAYING_CARD_WHITE } from '../../constants/colors';
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

export const Grid: StyledComponent<'div', {}> = styled.div`
  display: grid;
  grid-template-areas:
    'toolbar'
    'input';
  overflow: auto;

  @media screen and (orientation: landscape) {
    grid-template-areas:
      'input'
      'toolbar';
    grid-template-rows: 1fr;
  }
`;

export const DigitContainer: StyledComponent<'div', {}> = styled.div`
  display: grid;
  grid-gap: ${BUTTON_GAP}rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const H2: StyledComponent<'h2', {}> = styled.h2`
  color: ${PLAYING_CARD_WHITE};
  margin-bottom: 0.5rem;
  margin-top: 0;
  text-align: center;
`;

export const PadContainer: StyledComponent<'div', {}> = styled.div`
  display: grid;
  overflow: auto;
`;

export const InputContainer: StyledComponent<'div', {}> = styled.div`
  align-content: center;
  display: grid;
  grid-area: input;
  overflow: auto;
`;

export const TeamContainer: StyledComponent<'div', {}> = styled.div`
  display: grid;
  grid-gap: ${BUTTON_GAP}rem;
  grid-template-columns: 1fr 1fr;
  margin-bottom: ${BUTTON_GAP}rem;
`;

export const ToolbarContainer: StyledComponent<'div', {}> = styled.div`
  color: ${CHALK_WHITE};
  display: flex;
  font-size: 1.5rem;
  grid-area: toolbar;
  justify-content: space-between;
  padding: 0.5rem;
`;
