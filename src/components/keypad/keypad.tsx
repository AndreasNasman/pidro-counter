import React, { FunctionComponent, ReactElement, useState } from 'react';
import { PLAYING_CARD_BLACK } from '../../constants/colors';
import { Button, Container, H1, PointWrapper, TeamWrapper } from './styles';
import { IProps } from './types';

export const Keypad: FunctionComponent<IProps> = ({
  teams,
}: IProps): ReactElement => {
  const [points] = useState(() => {
    const size: number = 9;
    const minimum: number = 6;

    return Array.from(Array(size).keys()).map(
      (point: number) => point + minimum,
    );
  });

  return (
    <Container>
      <H1>Vem bjöud?</H1>

      <TeamWrapper>
        {teams.map((team: string) => (
          <Button key={team} theme={{ color: PLAYING_CARD_BLACK }}>
            {team.toUpperCase()}
          </Button>
        ))}
      </TeamWrapper>

      <PointWrapper>
        {points.map((point: number) => (
          <Button key={point}>{point}</Button>
        ))}
      </PointWrapper>
    </Container>
  );
};
