import styled, { StyledComponent } from 'styled-components';
import { CHALK_WHITE } from '../../constants/colors';
import { IAnswer } from './types';

export const Answer: StyledComponent<'span', {}, IAnswer> = styled.span`
  color: ${(props: IAnswer): string => props.color};
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.5rem;
`;

export const ChoiceContainer: StyledComponent<'div', {}> = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Confirmation: StyledComponent<'div', {}> = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const Container: StyledComponent<'div', {}> = styled.div`
  color: ${CHALK_WHITE};
  display: flex;
  font-size: 1.5rem;
  grid-area: toolbar;
  justify-content: space-between;
`;

export const H4: StyledComponent<'h4', {}> = styled.h4`
  margin-top: 0;
  text-align: center;
`;

export const IconWrapper: StyledComponent<'span', {}> = styled.span`
  align-items: center;
  display: flex;
  padding: 0.5rem;
`;
