import React, { FC } from "react";
import { Props } from "./types";
import classNames from "classnames";
import styles from "./Button.module.css";

export const Button: FC<Props> = ({
  activeColor,
  activeValue,
  disabled,
  handleClick,
  value
}) => (
  <button
    className={classNames(styles.button, {
      [activeColor]: activeValue === value
    })}
    disabled={disabled}
    onClick={(): void => handleClick(value)}
  >
    {value}
  </button>
);
