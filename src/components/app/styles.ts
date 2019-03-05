import styled, {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
  StyledComponent,
} from 'styled-components';
import { FELT_GREEN } from '../../constants/colors';

const SPACING: number = 1;

export const Felt: StyledComponent<'div', {}> = styled.div`
  background-color: ${FELT_GREEN};
  box-shadow: inset 0 0 10rem black;
  display: grid;
  height: calc(100vh - ${SPACING + SPACING}rem);
  padding: ${SPACING}rem;
`;

export const Grid: StyledComponent<'div', {}> = styled.div`
  display: grid;
  grid-template: 1fr auto / 1fr;
  overflow: auto;

  @media screen and (orientation: landscape) {
    grid-gap: ${SPACING}rem;
    grid-template: 1fr / 2fr 1fr;
  }
`;

export const GlobalStyle: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    }
  
  body {
    background-color: #000;
    overscroll-behavior: contain;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }
`;
