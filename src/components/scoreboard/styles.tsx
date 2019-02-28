import styled, { StyledComponent } from 'styled-components';
import { BLACK_BOARD, CHALK_WHITE } from '../../constants/colors';

const Row: StyledComponent<'div', {}> = styled.div`
  display: grid;
  grid-gap: 0.1rem;
  grid-template-columns: 1fr 1fr;
`;

export const Body: StyledComponent<'div', {}> = styled(Row)`
  overflow: auto;
`;

export const Cell: StyledComponent<'div', {}> = styled.div`
  color: ${CHALK_WHITE};
  font-size: 1.25rem;
  text-align: center;
  padding: 0.5rem;
`;

export const Column: StyledComponent<'div', {}> = styled.div`
  background-color: ${BLACK_BOARD};
`;

export const Foot: StyledComponent<'div', {}> = styled(Row)`
  border-top: 0.2rem solid whitesmoke;
  font-weight: bold;
`;

export const Head: StyledComponent<'div', {}> = styled(Row)`
  border-bottom: 0.2rem solid whitesmoke;
  font-weight: bold;
`;

export const Table: StyledComponent<'div', {}> = styled.div`
  background-color: ${CHALK_WHITE};
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  overflow: auto;
`;