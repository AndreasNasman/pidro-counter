import styled, { StyledComponent } from 'styled-components';
import { BLACK_BOARD, CHALK_WHITE } from '../../constants/colors';
import { ICell, ITable } from './types';

const row: StyledComponent<'div', {}> = styled.div`
  column-gap: 0.1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Body: StyledComponent<'div', {}> = styled(row)`
  overflow: auto;
`;

export const Cell: StyledComponent<'div', {}, ICell> = styled.div`
  color: ${CHALK_WHITE};
  display: grid;
  font-size: 1.25rem;
  grid-column-gap: 0.25rem;
  grid-template-areas: ${(props: ICell): string =>
    props.reverse === true ? '"emoji content ."' : '". content emoji"'};
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  padding: 0.5rem;
  text-transform: uppercase;
`;

export const Column: StyledComponent<'div', {}> = styled.div`
  background-color: ${BLACK_BOARD};
`;

export const Content: StyledComponent<'div', {}> = styled.div`
  grid-area: content;
`;

export const Emoji: StyledComponent<'span', {}> = styled.span`
  grid-area: emoji;
`;

export const Foot: StyledComponent<'div', {}> = styled(row)`
  border-top: 0.2rem solid ${CHALK_WHITE};
  font-weight: bold;
`;

export const Head: StyledComponent<'div', {}> = styled(row)`
  border-bottom: 0.2rem solid ${CHALK_WHITE};
  font-weight: bold;
`;

export const Table: StyledComponent<'div', {}, ITable> = styled.div`
  background-color: ${CHALK_WHITE};
  display: grid;
  grid-area: scoreboard;
  grid-template-rows: auto 1fr auto;
  min-height: ${(props: ITable): string => props.scoreboardMinHeight};
  min-width: max-content;
`;
