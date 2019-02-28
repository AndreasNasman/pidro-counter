import React, { FunctionComponent, ReactElement } from 'react';
import { ISet, Team } from '../app/types';
import { Body, Cell, Column, Foot, Head, Table } from './styles';
import { IProps } from './types';

export const Scoreboard: FunctionComponent<IProps> = ({
  game,
  teams,
}: IProps): ReactElement => (
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
        <Column key={team}>
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
