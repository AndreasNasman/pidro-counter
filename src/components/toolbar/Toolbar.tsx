import { MdRedo, MdReplay, MdUndo } from "react-icons/md";
import React, { FC } from "react";
import { Icon } from "./icon";
import { Props } from "./types";
import styles from "./Toolbar.module.css";

export const Toolbar: FC<Props> = ({
  canRedo,
  canReset,
  canUndo,
  redo,
  reset,
  undo
}) => (
  <div className={styles.container}>
    <Icon disabled={!canUndo} handleClick={undo} IconType={MdUndo} />
    <Icon disabled={!canReset} handleClick={reset} IconType={MdReplay} />
    <Icon disabled={!canRedo} handleClick={redo} IconType={MdRedo} />
  </div>
);
