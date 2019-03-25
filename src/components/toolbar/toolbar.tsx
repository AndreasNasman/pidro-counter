import React, { FunctionComponent, ReactElement, useState } from 'react';
import { MdRedo, MdReplay, MdUndo } from 'react-icons/md';
import Popover, {
  ArrowContainer,
  ContentRendererArgs,
} from 'react-tiny-popover';
import {
  DECK_BLUE,
  DECK_RED,
  PLAYING_CARD_WHITE,
} from '../../constants/colors';
import {
  Answer,
  ChoiceContainer,
  Confirmation,
  Container,
  H4,
  IconWrapper,
} from './styles';
import { IProps } from './types';

const TRANSITION_DURATION: number = 0.35;
const MILLI_SECOND_MULTIPLIER: number = 1000;

export const Toolbar: FunctionComponent<IProps> = ({
  canRedo,
  canResetScore,
  canUndo,
  redo,
  resetScore,
  undo,
}: IProps): ReactElement => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const openPopover: () => void = (): void => {
    setPopoverOpen(true);
  };

  const closePopover: () => void = (): void => {
    setPopoverOpen(false);
  };

  const replay: () => void = (): void => {
    closePopover();

    setTimeout(() => {
      resetScore();
    }, TRANSITION_DURATION * MILLI_SECOND_MULTIPLIER);
  };

  return (
    <Container>
      <IconWrapper disabled={!canUndo}>
        <MdUndo onClick={undo} />
      </IconWrapper>

      <Popover
        content={(
          { position, targetRect, popoverRect }: ContentRendererArgs, // tslint:disable-line: jsx-no-lambda
        ): JSX.Element => (
          <ArrowContainer
            arrowColor={PLAYING_CARD_WHITE}
            popoverRect={popoverRect}
            position={position}
            targetRect={targetRect}
          >
            <Confirmation>
              <H4>Vill du byri nyi spel?</H4>
              <ChoiceContainer>
                <Answer color={DECK_BLUE} onClick={replay}>
                  Jepp
                </Answer>
                <Answer color={DECK_RED} onClick={closePopover}>
                  Nepp
                </Answer>
              </ChoiceContainer>
            </Confirmation>
          </ArrowContainer>
        )}
        isOpen={popoverOpen}
        onClickOutside={closePopover}
        padding={0}
        transitionDuration={TRANSITION_DURATION}
      >
        <IconWrapper disabled={!canResetScore} onClick={openPopover}>
          <MdReplay />
        </IconWrapper>
      </Popover>

      <IconWrapper disabled={!canRedo}>
        <MdRedo onClick={redo} />
      </IconWrapper>
    </Container>
  );
};
