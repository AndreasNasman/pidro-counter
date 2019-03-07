import React, {
  FunctionComponent,
  MutableRefObject,
  ReactElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { ISet, Team } from '../app/types';
import { Body, Cell, Column, Foot, Head, Table } from './styles';
import { IProps } from './types';

export const Scoreboard: FunctionComponent<IProps> = ({
  game,
  teams,
}: IProps): ReactElement => {
  const [scoreboardMinHeight, setScoreboardMinHeight] = useState('0');
  const bodyColumnRef: MutableRefObject<HTMLDivElement | null> = useRef(null); // tslint:disable-line: no-null-keyword
  const headRef: MutableRefObject<HTMLDivElement | null> = useRef(null); // tslint:disable-line: no-null-keyword
  const footRef: MutableRefObject<HTMLDivElement | null> = useRef(null); // tslint:disable-line: no-null-keyword
  const footCellRef: MutableRefObject<HTMLDivElement | null> = useRef(null); // tslint:disable-line: no-null-keyword

  useEffect(() => {
    const { current } = bodyColumnRef;
    if (current === null) return undefined;

    current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [game.length]);

  useLayoutEffect(() => {
    const { current: currentHeadRef } = headRef;
    const { current: currentFootRef } = footRef;
    const { current: currentCellRef } = footCellRef;
    if (
      currentHeadRef === null ||
      currentFootRef === null ||
      currentCellRef === null
    ) {
      return undefined;
    }

    const newScoreboardMinHeight: string = `${currentHeadRef.offsetHeight +
      currentFootRef.offsetHeight +
      currentCellRef.offsetHeight}px`;
    setScoreboardMinHeight(newScoreboardMinHeight);
  }, []);

  return (
    <Table scoreboardMinHeight={scoreboardMinHeight}>
      <Head ref={headRef}>
        {teams.map((team: Team) => (
          <Column key={team}>
            <Cell>{team}</Cell>
          </Column>
        ))}
      </Head>

      <Body>
        {teams.map((team: Team) => (
          <Column key={team} ref={bodyColumnRef}>
            {game.map((set: ISet) => {
              if (set.bid.team === team && !set.score) {
                return <Cell key={set.round}>({set.bid.points})</Cell>;
              } else if (set.score) {
                return <Cell key={set.round}>{set.score[team]}</Cell>;
              }
            })}
          </Column>
        ))}
      </Body>

      <Foot ref={footRef}>
        {teams.map((team: Team) => (
          <Column key={team}>
            <Cell ref={footCellRef}>
              {game.reduce(
                (sum: number, set: ISet) =>
                  set.score ? sum + set.score[team] : sum,
                0,
              )}
            </Cell>
          </Column>
        ))}
      </Foot>
    </Table>
  );
};
