import range from 'lodash.range';
import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { PLAYING_CARD_BLACK, PLAYING_CARD_RED } from '../../constants/colors';
import { MAXIMUM_POINTS, MINIMUM_POINTS } from '../../constants/game';
import { Phases, Team } from '../app/types';
import {
  Button,
  Container,
  DigitContainer,
  H2,
  Prompt,
  TeamContainer,
} from './styles';
import { IProps } from './types';

const PROMPTS: { [key in Phases]: string } = {
  BIDDING: 'Vem bjöud?',
  SCORE: 'Vem fick högst poäng?',
};

export const Keypad: FunctionComponent<IProps> = ({
  phase,
  teams,
  updateSet,
  winner,
}: IProps): ReactElement => {
  const [digits] = useState(range(MINIMUM_POINTS, MAXIMUM_POINTS + 1));
  const [selectedTeam, setSelectedTeam] = useState<Team | undefined>(undefined);
  const [selectedDigit, setSelectedDigit] = useState<number | undefined>(
    undefined,
  );
  const [promptMinWidth, setPromptMinWidth] = useState('0');

  useEffect(() => {
    if (selectedTeam === undefined || selectedDigit === undefined) {
      return undefined;
    }

    updateSet({ points: selectedDigit, team: selectedTeam });
    setSelectedTeam(undefined);
    setSelectedDigit(undefined);
  }, [selectedTeam, selectedDigit]);

  useEffect(() => {
    const maxPromptCharacters: number = Math.max(
      ...Object.values(PROMPTS).map(
        (prompt: string) => prompt.replace(/\s/g, '').length,
      ),
    );
    setPromptMinWidth(`${maxPromptCharacters}ch`);
  }, []);

  const handleTeamClick: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const newSelectedTeam: Team = event.currentTarget.textContent as Team;

    setSelectedTeam(newSelectedTeam);
  };

  const handleDigitClick: (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => void = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const { textContent } = event.currentTarget;
    const newSelectedDigit: number = Number(textContent);

    setSelectedDigit(newSelectedDigit);
  };

  return (
    <Container>
      {winner ? (
        <H2>{winner.team} vann!</H2>
      ) : (
        <>
          <Prompt minWidth={promptMinWidth}>{PROMPTS[phase]}</Prompt>

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
              >
                {digit}
              </Button>
            ))}
          </DigitContainer>
        </>
      )}
    </Container>
  );
};
