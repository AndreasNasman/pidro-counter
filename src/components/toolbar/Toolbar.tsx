import { MdRedo, MdUndo } from "react-icons/md";
import React, { FC } from "react";
import { Icon } from "./icon";
import { Props } from "./types";
import styles from "./Toolbar.module.css";

export const Toolbar: FC<Props> = ({ canRedo, canUndo, redo, undo }) => (
  <div className={styles.container}>
    <Icon disabled={!canUndo} handleClick={undo} IconType={MdUndo} />
    <Icon disabled={!canRedo} handleClick={redo} IconType={MdRedo} />
  </div>
);
