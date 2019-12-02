import React, { FC, useEffect, useRef, useState } from "react";
import { Body } from "./body";
import { Foot } from "./foot";
import { Head } from "./head";
import { Props } from "./types";
import styles from "./Scoreboard.module.css";

export const Scoreboard: FC<Props> = ({ game }) => {
  const [minHeight, setMinHeight] = useState<number>();
  const headRef = useRef<HTMLDivElement | null>(null);
  const footRef = useRef<HTMLDivElement | null>(null);
  const footCellRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
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
      <Head headRef={headRef} score={game.score} />
      <Body rounds={game.rounds} />
      <Foot footCellRef={footCellRef} footRef={footRef} score={game.score} />
    </div>
  );
};
