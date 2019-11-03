import React, { FC, useLayoutEffect, useRef, useState } from "react";
import { Body } from "./body";
import { Foot } from "./foot";
import { Head } from "./head";
import { Props } from "./types";
import styles from "./Scoreboard.module.css";

export const Scoreboard: FC<Props> = ({ game, score }) => {
  const [minHeight, setMinHeight] = useState<number>();
  const headRef = useRef<HTMLDivElement | null>(null);
  const footRef = useRef<HTMLDivElement | null>(null);
  const footCellRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const { current: currentHeadRef } = headRef;
    const { current: currentFootRef } = footRef;
    const { current: currentFootCellRef } = footCellRef;
    if (
      currentHeadRef === null ||
      currentFootRef === null ||
      currentFootCellRef === null
    )
      return;

    const newMinHeight =
      currentHeadRef.offsetHeight +
      currentFootRef.offsetHeight +
      currentFootCellRef.offsetHeight;
    setMinHeight(newMinHeight);
  }, []);

  return (
    <div className={styles.table} style={{ minHeight }}>
      <Head headRef={headRef} score={score} />
      <Body game={game} />
      <Foot footCellRef={footCellRef} footRef={footRef} score={score} />
    </div>
  );
};
