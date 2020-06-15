import classNames from "classnames";
import React from "react";
import styles from "./Button.module.css";
import { Props } from "./types";

export const Button = <T,>({
  active,
  activeColor,
  disabled,
  handleClick,
  text,
  value,
}: Props<T>): JSX.Element => (
  <button
    className={classNames(styles.button, { [activeColor]: active })}
    disabled={disabled}
    onClick={(): void => handleClick(value)}
  >
    {text}
  </button>
);
