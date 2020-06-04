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
    setMinHeight(
      Number(headRef.current?.offsetHeight) +
        Number(footRef.current?.offsetHeight) +
        Number(footCellRef.current?.offsetHeight)
    );
  }, []);

  return (
    <div className={styles.table} style={{ minHeight }}>
      <Head headRef={headRef} score={game.score} />
      <Body rounds={game.rounds} />
      <Foot footCellRef={footCellRef} footRef={footRef} score={game.score} />
    </div>
  );
};
