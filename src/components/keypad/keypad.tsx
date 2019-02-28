import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { PLAYING_CARD_BLACK, PLAYING_CARD_RED } from '../../constants/colors';
import { MAXIMUM_POINTS, MINIMUM_POINTS } from '../../constants/game';
import { Phases, Team } from '../app/types';
import { Button, Container, H2, PointWrapper, TeamWrapper } from './styles';
import { IProps } from './types';

export const Keypad: FunctionComponent<IProps> = ({
  phase,
  teams,
  updateSet,
}: IProps): ReactElement => {
  const [points] = useState(() =>
    Array.from(Array(MAXIMUM_POINTS - MINIMUM_POINTS + 1).keys()).map(
      (point: number) => point + MINIMUM_POINTS,
    ),
  );
  const [selectedTeam, setSelectedTeam] = useState<Team | undefined>(undefined);
  const [selectedPoint, setSelectedPoint] = useState<number | undefined>(
    undefined,
  );

  useEffect(() => {
    if (selectedTeam !== undefined && selectedPoint !== undefined) {
      updateSet({ point: selectedPoint, team: selectedTeam });
      setSelectedTeam(undefined);
      setSelectedPoint(undefined);
    }
  }, [selectedTeam, selectedPoint]);

  const handleTeamClick: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const newSelectedTeam: Team = event.currentTarget.value as Team;

    if (newSelectedTeam === selectedTeam) return;

    setSelectedTeam(newSelectedTeam);
  };

  const handlePointClick: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const { value } = event.currentTarget;
    const newSelectedPoint: number = Number(value);

    if (newSelectedPoint === selectedPoint) return;

    setSelectedPoint(newSelectedPoint);
  };

  return (
    <Container>
      {phase === Phases.Bidding ? (
        <H2>Vem bjöud?</H2>
      ) : (
        <H2>Vem fick högst poäng?</H2>
      )}

      <TeamWrapper>
        {teams.map((team: Team) => (
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
