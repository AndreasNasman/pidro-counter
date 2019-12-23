import React, { FC } from "react";
import TinyPopover, { ArrowContainer } from "react-tiny-popover";
import { MILLISECOND_MAGNITUDE } from "components/common/constants";
import { Props } from "./types";
import { TRANSITION_DURATION } from "./constants";
import classNames from "classnames";
import colors from "components/common/colors.module.css";
import styles from "./Popover.module.css";

export const Popover: FC<Props> = ({
  affirmative,
  children,
  close,
  isOpen
}) => (
  <TinyPopover
    content={({ popoverRect, position, targetRect }): JSX.Element => (
      <ArrowContainer
        arrowColor={colors.playingCardWhite}
        popoverRect={popoverRect}
        position={position}
        targetRect={targetRect}
      >
        <div className={styles.confirmation}>
          <h4 className={styles.h4}>Are you sure you want to restart?</h4>
          <div className={styles.choiceContainer}>
            <span
              className={classNames(styles.answer, styles.affirmative)}
              onClick={(): void => {
                close();
                setTimeout(() => {
                  affirmative();
                }, TRANSITION_DURATION * MILLISECOND_MAGNITUDE);
              }}
            >
              Yes
            </span>
            <span
              className={classNames(styles.answer, styles.negative)}
              onClick={(): void => close()}
            >
              No
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
