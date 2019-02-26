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
  grid-template: minmax(0, 1fr) auto / 1fr;
  height: calc(100vh - ${SPACING + SPACING}rem);
  padding: ${SPACING}rem;

  @media screen and (orientation: landscape) {
    grid-gap: ${SPACING}rem;
    grid-template: 1fr / minmax(min-content, 2fr) minmax(min-content, 1fr);
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
`;
