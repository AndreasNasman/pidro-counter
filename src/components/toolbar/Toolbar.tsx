import { MdRedo, MdUndo } from "react-icons/md";
import React, { FC } from "react";
import { Props } from "./types";
import classNames from "classnames";
import styles from "./Toolbar.module.css";

export const Toolbar: FC<Props> = ({ canRedo, canUndo, undoRedo }) => (
  <div className={styles.container}>
    <span
      className={classNames(styles.iconWrapper, {
        [styles.disabled]: !canUndo
      })}
    >
      <MdUndo onClick={(): void => undoRedo(-1)} />
    </span>

    <span
      className={classNames(styles.iconWrapper, {
        [styles.disabled]: !canRedo
      })}
    >
      <MdRedo onClick={(): void => undoRedo(1)} />
    </span>
  </div>
);
