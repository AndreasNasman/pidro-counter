import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { MdRedo, MdReplay, MdUndo } from 'react-icons/md';
import { PLAYING_CARD_BLACK, PLAYING_CARD_RED } from '../../constants/colors';
import { MAXIMUM_POINTS, MINIMUM_POINTS } from '../../constants/game';
import { Phases, Team } from '../app/types';
import {
  Button,
  DigitContainer,
  Grid,
  H2,
  InputContainer,
  PadContainer,
  TeamContainer,
  ToolbarContainer,
} from './styles';
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
    const newSelectedTeam: Team = event.currentTarget.value as Team;

    if (newSelectedTeam === selectedTeam) return;

    setSelectedTeam(newSelectedTeam);
  };

  const handleDigitClick: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const { value } = event.currentTarget;
    const newSelectedDigit: number = Number(value);

    if (newSelectedDigit === selectedDigit) return;

    setSelectedDigit(newSelectedDigit);
  };

  return (
    <Grid>
      <InputContainer>
        {phase === Phases.Bidding ? <H2>Vem bjöud?</H2> : <H2>Vem vann?</H2>}

        <PadContainer>
          <TeamContainer>
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
        </PadContainer>
      </InputContainer>

      <ToolbarContainer>
        <MdUndo />
        <MdReplay />
        <MdRedo />
      </ToolbarContainer>
    </Grid>
  );
};
