import React, { FC, useReducer } from "react";
import { initialState } from "reducers/game/initialState";
import { reducer } from "reducers/game/reducer";
import { createCtx } from "./helper";
import { determineResult } from "./logic";
import { Context, Input, Props } from "./types";

export const [useGameContext, GameContextProvider] = createCtx<Context>();

export const GameProvider: FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addBid = ({ points, team }: Input): void => {
    dispatch({ payload: { points, team }, type: "ADD_BID" });
  };

  const addScore = ({ points, team }: Input): void => {
    const { bid } = state.game[state.game.length - 1];
    const score = determineResult(bid, { points, team });
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
