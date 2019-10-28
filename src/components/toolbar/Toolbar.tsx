import { MdRedo, MdUndo } from "react-icons/md";
import React, { FC } from "react";
import { Props } from "./types";
import classNames from "classnames";
import styles from "./Toolbar.module.css";

export const Toolbar: FC<Props> = ({ canRedo, canUndo, redo, undo }) => (
  <div className={styles.container}>
    <span
      className={classNames(styles.iconWrapper, {
        [styles.disabled]: !canUndo
      })}
    >
      <MdUndo onClick={undo} />
    </span>

    <span
      className={classNames(styles.iconWrapper, {
        [styles.disabled]: !canRedo
      })}
    >
      <MdRedo onClick={redo} />
    </span>
  </div>
);
