import { initialState } from "./initialState";
import { reducer } from "./reducer";
import { Action, State } from "./types";

let state: State = initialState;

test("add bid", () => {
  const action: Action = {
    payload: { points: 14, team: "us" },
    type: "ADD_BID",
  };
  state = reducer(state, action);
  expect(state).toEqual({
    game: [{ bid: { points: 14, team: "us" } }],
    phase: "score",
    round: 1,
    totalScore: { they: 0, us: 0 },
  });
});

test("add score", () => {
  const action: Action = {
    payload: { they: 14, us: 0 },
    type: "ADD_SCORE",
  };
  state = reducer(state, action);
  expect(state).toEqual({
    game: [
      {
        bid: { points: 14, team: "us" },
        score: { they: 14, us: 0 },
      },
    ],
    phase: "bid",
    round: 2,
    totalScore: { they: 14, us: 0 },
  });
});

test("reset", () => {
  const action: Action = { type: "RESET" };
  state = reducer(state, action);
  expect(state).toEqual(initialState);
});

test("unknown action type", () => {
  const action = { type: "UNKNOWN" };
  expect(() => {
    reducer(state, action);
  }).toThrow(new Error("Unknown action type"));
});
