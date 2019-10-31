import { Props, Value } from "./types";
import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

export const Button = <T extends Value>({
  active,
  activeColor,
  disabled,
  handleClick,
  value
}: Props<T>): JSX.Element => (
  <button
    className={classNames(styles.button, { [activeColor]: active })}
    disabled={disabled}
    onClick={(): void => handleClick(value)}
  >
    {value}
  </button>
);
