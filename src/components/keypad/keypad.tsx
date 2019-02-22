import React, { FunctionComponent, ReactElement, useState } from 'react';
import { PLAYING_CARD_BLACK } from '../../constants/colors';
import { Button, H1, PointWrapper, TeamWrapper } from './styles';

export const Keypad: FunctionComponent = (): ReactElement => {
  const [teams] = useState(['vi', 'de']);
  const [points] = useState(() => {
    const size: number = 9;
    const minimum: number = 6;

    return Array.from(Array(size).keys()).map(
      (point: number) => point + minimum,
    );
  });

  return (
    <div>
      <H1>Vem bjöud?</H1>

      <TeamWrapper>
        {teams.map((team: string) => (
          <Button key={team} theme={{ color: PLAYING_CARD_BLACK }}>
            {team}
          </Button>
        ))}
      </TeamWrapper>

      <PointWrapper>
        {points.map((point: number) => (
          <Button key={point}>{point}</Button>
        ))}
      </PointWrapper>
    </div>
  );
};
