import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Button, Grid } from './styles';

export const Keypad: FunctionComponent = (): ReactElement => {
  const [points] = useState(() => {
    const size: number = 9;
    const minimum: number = 6;

    return Array.from(Array(size).keys()).map(
      (point: number) => point + minimum,
    );
  });

  return (
    <Grid>
      {points.map((point: number) => (
        <Button key={point}>{point}</Button>
      ))}
    </Grid>
  );
};
