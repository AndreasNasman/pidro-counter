import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Body, Cell, Column, Foot, Head, Table } from './styles';
import { IProps } from './types';

export const Scoreboard: FunctionComponent<IProps> = ({
  teams,
}: IProps): ReactElement => {
  const [sets] = useState([
    { round: 1, score: { de: 7, vi: 7 } },
    { round: 2, score: { de: 14, vi: -9 } },
    { round: 3, score: { de: 14, vi: -10 } },
    { round: 4, score: { de: 6, vi: -11 } },
    { round: 5, score: { de: 6, vi: -12 } },
    { round: 6, score: { de: 6, vi: -13 } },
    { round: 7, score: { de: 6, vi: -14 } },
    { round: 8, score: { de: 14, vi: 0 } },
  ]);

  return (
    <Table>
      <Head>
        {teams.map((team: string) => (
          <Column key={team}>
            <Cell>{team.toUpperCase()}</Cell>
          </Column>
        ))}
      </Head>

      <Body>
        <Column>
          {sets.map((set: { round: number; score: { vi: number } }) => (
            <Cell key={set.round}>{set.score.vi}</Cell>
          ))}
        </Column>

        <Column>
          {sets.map((set: { round: number; score: { de: number } }) => (
            <Cell key={set.round}>{set.score.de}</Cell>
          ))}
        </Column>
      </Body>

      <Foot>
        <Column>
          <Cell>
            {sets.reduce(
              (sum: number, set: { score: { vi: number } }) =>
                sum + set.score.vi,
              0,
            )}
          </Cell>
        </Column>

        <Column>
          <Cell>
            {sets.reduce(
              (sum: number, set: { score: { de: number } }) =>
                sum + set.score.de,
              0,
            )}
          </Cell>
        </Column>
      </Foot>
    </Table>
  );
};
