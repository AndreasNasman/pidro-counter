import styled, { StyledComponent } from 'styled-components';
import { IButton } from './types';

const buttonGap: number = 0.1;

export const Button: StyledComponent<'button', {}, IButton> = styled.button`
  background-color: ${(props: IButton): string =>
    props.active ? 'white' : 'transparent'};
  border: 0.25rem solid white;
  border-radius: 0.5rem;
  color: white;
  color: ${(props: IButton): string =>
    props.active ? props.activeColor : 'white'};
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
  grid-gap: ${buttonGap}rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const H2: StyledComponent<'h2', {}> = styled.h2`
  color: white;
  margin-top: 0;
  text-align: center;
`;

export const TeamWrapper: StyledComponent<'div', {}> = styled.div`
  display: grid;
  grid-gap: ${buttonGap}rem;
  grid-template-columns: 1fr 1fr;
  margin-bottom: ${buttonGap}rem;
`;
