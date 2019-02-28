import React, {
  FunctionComponent,
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef,
} from 'react';
import { ISet, Team } from '../app/types';
import { Body, Cell, Column, Foot, Head, Table } from './styles';
import { IProps } from './types';

export const Scoreboard: FunctionComponent<IProps> = ({
  game,
  teams,
}: IProps): ReactElement => {
  const bodyColumnRef: MutableRefObject<HTMLDivElement | null> = useRef(null); // tslint:disable-line: no-null-keyword
  useEffect(() => {
    const { current } = bodyColumnRef;
    if (current === null) return undefined;

    current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [game.length]);

  return (
    <Table>
      <Head>
        {teams.map((team: Team) => (
          <Column key={team}>
            <Cell>{team.toUpperCase()}</Cell>
          </Column>
        ))}
      </Head>

      <Body>
        {teams.map((team: Team) => (
          <Column key={team} ref={bodyColumnRef}>
            {game.map(
              (set: ISet) =>
                set.score && <Cell key={set.round}>{set.score[team]}</Cell>, // tslint:disable-line: strict-boolean-expressions
            )}
          </Column>
        ))}
      </Body>

      <Foot>
        {teams.map((team: Team) => (
          <Column key={team}>
            <Cell>
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
