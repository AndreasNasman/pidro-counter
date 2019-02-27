import React, { FunctionComponent, ReactElement, useState } from 'react';
import { PLAYING_CARD_BLACK, PLAYING_CARD_RED } from '../../constants/colors';
import { Button, Container, H2, PointWrapper, TeamWrapper } from './styles';
import { IProps } from './types';

export const Keypad: FunctionComponent<IProps> = ({
  bid,
  teams,
}: IProps): ReactElement => {
  const [points] = useState(() => {
    const size: number = 9;
    const minimum: number = 6;

    return Array.from(Array(size).keys()).map(
      (point: number) => point + minimum,
    );
  });
  const [selectedTeam, setSelectedTeam] = useState<string | undefined>(
    undefined,
  );
  const [selectedPoint, setSelectedPoint] = useState<number | undefined>(
    undefined,
  );

  const handleTeamClick: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const { value } = event.currentTarget;
    setSelectedTeam(value);
  };

  const handlePointClick: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const { value } = event.currentTarget;
    setSelectedPoint(Number(value));
  };

  return (
    <Container>
      {!bid || bid.team === undefined || bid.point === undefined ? (
        <H2>Vem bjöud?</H2>
      ) : (
        <H2>Vem fick högst poäng?</H2>
      )}

      <TeamWrapper>
        {teams.map((team: string) => (
          <Button
            active={team === selectedTeam}
            activeColor={PLAYING_CARD_BLACK}
            key={team}
            onClick={handleTeamClick}
            value={team}
          >
            {team.toUpperCase()}
          </Button>
        ))}
      </TeamWrapper>

      <PointWrapper>
        {points.map((point: number) => (
          <Button
            active={point === selectedPoint}
            activeColor={PLAYING_CARD_RED}
            key={point}
            onClick={handlePointClick}
            value={point}
          >
            {point}
          </Button>
        ))}
      </PointWrapper>
    </Container>
  );
};
