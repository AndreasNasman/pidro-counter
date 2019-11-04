import React, { FC } from "react";
import { Props } from "./types";
import classNames from "classnames";
import styles from "./Icon.module.css";

export const Icon: FC<Props> = ({ disabled, handleClick, IconType }) => (
  <span
    className={classNames(styles.wrapper, {
      [styles.disabled]: disabled
    })}
  >
    <IconType onClick={handleClick} />
  </span>
);
