import React, { FunctionComponent, ReactElement, useState } from 'react';
import { PLAYING_CARD_BLACK } from '../../constants/colors';
import { Button, H1, PointWrapper, TeamWrapper } from './styles';

export const Keypad: FunctionComponent = (): ReactElement => {
  const [points] = useState(() => {
    const size: number = 9;
    const minimum: number = 6;

    return Array.from(Array(size).keys()).map(
      (point: number) => point + minimum,
    );
  });

  return (
    <>
      <H1>Vem bjöud va?</H1>

      <TeamWrapper>
        <Button theme={{ color: PLAYING_CARD_BLACK }}>Vi</Button>
        <Button theme={{ color: PLAYING_CARD_BLACK }}>De</Button>
      </TeamWrapper>

      <PointWrapper>
        {points.map((point: number) => (
          <Button key={point}>{point}</Button>
        ))}
      </PointWrapper>
    </>
  );
};
