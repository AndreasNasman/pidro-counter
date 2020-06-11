import React, { FC, useReducer } from "react";
import { initialState } from "reducers/game/initialState";
import { reducer } from "reducers/game/reducer";
import { Bid, Score } from "reducers/game/types";
import { createCtx } from "./helper";
import { Context, Props } from "./types";

export const [useGameContext, GameContextProvider] = createCtx<Context>();

export const GameProvider: FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addBid = (bid: Bid): void => {
    dispatch({ payload: { ...bid }, type: "ADD_BID" });
  };

  const addScore = (score: Score): void => {
    dispatch({ payload: { ...score }, type: "ADD_SCORE" });
  };

  const reset = (): void => {
    dispatch({ type: "RESET" });
  };

  return (
    <GameContextProvider value={{ addBid, addScore, reset, state }}>
      {children}
    </GameContextProvider>
  );
};
