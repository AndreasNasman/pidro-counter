import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { PLAYING_CARD_BLACK, PLAYING_CARD_RED } from '../../constants/colors';
import { MAXIMUM_POINTS, MINIMUM_POINTS } from '../../constants/game';
import { Phases, Team } from '../app/types';
import { Button, Container, DigitContainer, H2, TeamContainer } from './styles';
import { IProps } from './types';

export const Keypad: FunctionComponent<IProps> = ({
  phase,
  teams,
  updateSet,
}: IProps): ReactElement => {
  const [digits] = useState(() =>
    Array.from(Array(MAXIMUM_POINTS - MINIMUM_POINTS + 1).keys()).map(
      (digit: number) => digit + MINIMUM_POINTS,
    ),
  );
  const [selectedTeam, setSelectedTeam] = useState<Team | undefined>(undefined);
  const [selectedDigit, setSelectedDigit] = useState<number | undefined>(
    undefined,
  );

  useEffect(() => {
    if (selectedTeam === undefined || selectedDigit === undefined) {
      return undefined;
    }

    updateSet({ points: selectedDigit, team: selectedTeam });
    setSelectedTeam(undefined);
    setSelectedDigit(undefined);
  }, [selectedTeam, selectedDigit]);

  const handleTeamClick: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const newSelectedTeam: Team = event.currentTarget.textContent as Team;

    if (newSelectedTeam === selectedTeam) return;

    setSelectedTeam(newSelectedTeam);
  };

  const handleDigitClick: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const { textContent } = event.currentTarget;
    const newSelectedDigit: number = Number(textContent);

    if (newSelectedDigit === selectedDigit) return;

    setSelectedDigit(newSelectedDigit);
  };

  return (
    <Container>
      {phase === Phases.Bidding ? <H2>Vem bjöud?</H2> : <H2>Vem vann?</H2>}

      <TeamContainer>
        {teams.map((team: Team) => (
          <Button
            active={team === selectedTeam}
            activeColor={PLAYING_CARD_BLACK}
            key={team}
            onClick={handleTeamClick}
          >
            {team}
          </Button>
        ))}
      </TeamContainer>

      <DigitContainer>
        {digits.map((digit: number) => (
          <Button
            active={digit === selectedDigit}
            activeColor={PLAYING_CARD_RED}
            key={digit}
            onClick={handleDigitClick}
            value={digit}
          >
            {digit}
          </Button>
        ))}
      </DigitContainer>
    </Container>
  );
};
