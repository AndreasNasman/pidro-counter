import classNames from "classnames";
import colors from "components/colors.module.css";
import React, { FC } from "react";
import TinyPopover, { ArrowContainer } from "react-tiny-popover";
import { TRANSITION_DURATION } from "./constants";
import styles from "./Popover.module.css";
import { Props } from "./types";

export const Popover: FC<Props> = ({
  affirmative,
  children,
  close,
  isOpen,
}: Props) => (
  <TinyPopover
    content={({ popoverRect, position, targetRect }): JSX.Element => (
      <ArrowContainer
        arrowColor={colors.playing_card_white}
        popoverRect={popoverRect}
        position={position}
        targetRect={targetRect}
      >
        <div className={styles.container}>
          <h4 className={styles.question}>Vill du byri nyi spel?</h4>
          <div className={styles.choice}>
            <span
              className={classNames(styles.answer, styles.affirmative)}
              onClick={(): void => {
                close();
                setTimeout(() => {
                  affirmative();
                }, TRANSITION_DURATION);
              }}
            >
              Jepp
            </span>
            <span
              className={classNames(styles.answer, styles.negative)}
              onClick={(): void => close()}
            >
              Nepp
            </span>
          </div>
        </div>
      </ArrowContainer>
    )}
    isOpen={isOpen}
    onClickOutside={(): void => close()}
    padding={0}
    transitionDuration={TRANSITION_DURATION}
  >
    {children}
  </TinyPopover>
);
