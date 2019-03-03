import styled, {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
  StyledComponent,
} from 'styled-components';
import { FELT_GREEN } from '../../constants/colors';
import { IFelt } from './types';

const SPACING: number = 1;

export const Felt: StyledComponent<'div', {}, IFelt> = styled.div`
  background-color: ${FELT_GREEN};
  box-shadow: inset 0 0 10rem black;
  display: grid;
  grid-gap: ${SPACING}rem;
  grid-template:
    minmax(${(props: IFelt): string => props.scoreboardMinHeight}, 1fr)
    auto / minmax(0, 1fr);
  height: calc(100vh - ${SPACING + SPACING}rem);
  padding: ${SPACING}rem;

  @media screen and (orientation: landscape) {
    grid-template:
      minmax(${(props: IFelt): string => props.scoreboardMinHeight}, 1fr)
      / minmax(min-content, 2fr) minmax(min-content, 1fr);
    overflow: auto;
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
    background-color: black;
    overscroll-behavior: contain;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }
`;
