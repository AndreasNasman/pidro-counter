import styled, { StyledComponent } from 'styled-components';
import { CHALK_WHITE } from '../../constants/colors';

export const Container: StyledComponent<'div', {}> = styled.div`
  color: ${CHALK_WHITE};
  display: flex;
  font-size: 1.5rem;
  grid-area: toolbar;
  justify-content: space-between;
`;

export const IconWrapper: StyledComponent<'div', {}> = styled.div`
  align-items: center;
  display: flex;
  padding: 0.5rem;
`;
